import getAccessToken from "../../Helpers/generateTokenPaypal";

interface PagoPaypalParams {
  cantidad: string;
  referencia: string;
  email: string;
  id_cliente: number;
  id_producto?: number | null;
}

interface CarritoItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  discount: number;
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
      custom_id: `${id_cliente}-${id_producto ?? 'null'}`
    }],
    payer: {
      email_address: email
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
  const id_factura = facturaData.data.id_factura;

  // 3. Lógica individual o carrito completo
  const resCart = await fetch(`https://redgas.onrender.com/CartGetNoToken?id=${id_cliente}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  const cartData: CarritoItem[] = await resCart.json();

  if (id_producto) {
    const producto = cartData.find(item => item.productId === id_producto);
    const cantidad_producto = producto?.quantity ?? 1;

    await fetch("https://redgas.onrender.com/PedidoProductoRegister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_factura,
        id_producto,
        estado_pedido: `aprobado//${producto?.discount ?? 0}`,
        cantidad_producto
      }),
    });

    await fetch("https://redgas.onrender.com/ProductoUpdateStock", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_producto,
        stock: cantidad_producto
      }),
    });

    // Limpiar solo ese producto del carrito
    await fetch("https://redgas.onrender.com/CartRemoveNoToken", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id_cliente,
        productId: id_producto
      })
    });

  } else {
    // Registrar todos los productos del carrito
    for (const item of cartData) {
      await fetch("https://redgas.onrender.com/PedidoProductoRegister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_factura,
          id_producto: item.productId,
          estado_pedido: `aprobado//${item?.discount ?? 0}`,
          cantidad_producto: item.quantity
        }),
      });

      await fetch("https://redgas.onrender.com/ProductoUpdateStock", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_producto: item.productId,
          stock: item.quantity
        }),
      });
    }

    // Limpiar carrito completo
    await fetch(`https://redgas.onrender.com/CartClearNoToken?id=${id_cliente}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }
};

export default {
  PagoPaypal,
  CapturarPago,
  ProcesarPagoYGenerarFacturaPayPal
};
