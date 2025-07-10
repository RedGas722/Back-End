import getAccessToken from "../../Helpers/generateTokenPaypal";

interface PagoPaypalParams {
  cantidad: string;
  referencia: string;
  email: string; // solo para mostrar en PayPal
  id_cliente: number; // obligatorio ahora
  id_producto?: number | null;
}

const PagoPaypal = async ({ cantidad, referencia, email, id_cliente, id_producto }: PagoPaypalParams) => {
  const token = await getAccessToken();

  const body = {
    intent: "CAPTURE",
    purchase_units: [{
      reference_id: referencia,
      amount: {
        currency_code: "USD",
        value: cantidad
      },
      custom_id: `${id_cliente}-${id_producto ?? 'null'}` // ✅ Aquí está el custom_id
    }],
    payer: {
      email_address: email // este es solo decorativo para PayPal
    },
    application_context: {
      return_url: "https://redgas-one.vercel.app/Shopping/ConfirmacionPayPal",
      cancel_url: "https://redgas-one.vercel.app/Shopping/Cancelado"
    }
  };

  const response = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al crear la orden en PayPal");
  }

  return data;
};

const CapturarPago = async (orderID: string) => {
  const token = await getAccessToken();

  const response = await fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Error al capturar pago:", data);
    throw new Error(data.message || "No se pudo capturar el pago");
  }

  return data;
};

const ProcesarPagoYGenerarFacturaPayPal = async ({
  referencia,
  cantidad,
  id_cliente,
  id_producto = null
}: PagoPaypalParams) => {

  if (!id_cliente) throw new Error("Se requiere id_cliente");

  // 1. Obtener empleado virtual
  const resEmpleado = await fetch("https://redgas.onrender.com/EmpleadoGet?correo_empleado=virtual@gmail.com");
  const dataEmpleado = await resEmpleado.json();
  if (!dataEmpleado?.data?.id_empleado) throw new Error("Empleado virtual no encontrado");

  const id_empleado = dataEmpleado.data.id_empleado;

  // 2. Registrar factura
  const fecha_factura = new Date().toISOString().split("T")[0];
  const facturaRes = await fetch("https://redgas.onrender.com/FacturaRegister", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fecha_factura,
      id_cliente,
      id_empleado,
      total: parseFloat(cantidad),
      referencia
    }),
  });

  const facturaData = await facturaRes.json();
  if (!facturaData?.data?.id_factura) throw new Error("No se pudo generar la factura");

  const id_factura = facturaData.data.id_factura;

  if (id_producto) {
    // 3A. Registrar solo un producto individual
    const productoRes = await fetch(`https://redgas.onrender.com/ProductoGetById?id_producto=${id_producto}`);
    const productoData = await productoRes.json();
    const producto = productoData?.data;
    if (!producto) throw new Error("Producto no encontrado");

    await fetch("https://redgas.onrender.com/PedidoProductoRegister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_factura,
        id_producto,
        estado_pedido: "aprobado",
        cantidad_producto: 1
      }),
    });

    await fetch("https://redgas.onrender.com/ProductoUpdateStock", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_producto,
        stock: 1
      }),
    });

  } else {
    // 3B. Registrar todo el carrito del cliente
    const resCart = await fetch(`https://redgas.onrender.com/CartGetByIdCliente?id_cliente=${id_cliente}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const cartData = await resCart.json();

    if (!Array.isArray(cartData) || cartData.length === 0) {
      throw new Error("El carrito está vacío");
    }

    for (const item of cartData) {
      await fetch("https://redgas.onrender.com/PedidoProductoRegister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_factura,
          id_producto: item.productId,
          estado_pedido: "aprobado",
          cantidad_producto: item.quantity,
        }),
      });

      await fetch("https://redgas.onrender.com/ProductoUpdateStock", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_producto: item.productId,
          stock: item.quantity,
        }),
      });
    }

    // 4. Limpiar carrito
    if (id_producto) {
      // Si fue compra individual, eliminar solo ese producto del carrito
      await fetch("https://redgas.onrender.com/CartRemove", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id_cliente,
          productId: id_producto
        })
      });
    } else {
      // Si fue compra de todo el carrito, limpiarlo completo
      await fetch("https://redgas.onrender.com/CartClear", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id_cliente
        })
      });
    }
  }
};

export default {
  PagoPaypal,
  CapturarPago,
  ProcesarPagoYGenerarFacturaPayPal
};
