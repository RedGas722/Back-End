import getAccessToken from "../../Helpers/generateTokenPaypal";

interface PagoPaypalParams {
  cantidad: string;
  referencia: string;
  email: string;
}

const PagoPaypal = async ({ cantidad, referencia, email }: PagoPaypalParams) => {
  const token = await getAccessToken();

  const body = {
    intent: "CAPTURE",
    purchase_units: [{
      reference_id: referencia,
      amount: {
        currency_code: "USD",
        value: cantidad
      }
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

  const ProcesarPagoYGenerarFacturaPayPal = async ({ referencia, email, cantidad }: PagoPaypalParams) => {
    // 1. Obtener cliente por email
    const clienteRes = await fetch(`https://redgas.onrender.com/ClienteGet?correo_cliente=${email}`);
    const clienteData = await clienteRes.json();
    if (!clienteData?.data?.id_cliente) throw new Error("Cliente no encontrado");

    const id_cliente = clienteData.data.id_cliente;

    // 2. Obtener empleado virtual
    const resEmpleado = await fetch("https://redgas.onrender.com/EmpleadoGet?correo_empleado=virtual@gmail.com");
    const dataEmpleado = await resEmpleado.json();
    if (!dataEmpleado?.data?.id_empleado) throw new Error("Empleado virtual no encontrado");

    const id_empleado = dataEmpleado.data.id_empleado;

    // 3. Registrar factura
    const fecha_factura = new Date().toISOString().split("T")[0];
    const facturaRes = await fetch("https://redgas.onrender.com/FacturaRegister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fecha_factura,
        id_cliente,
        id_empleado,
        total: parseFloat(cantidad), // CORREGIDO
        referencia
      }),
    });

    const facturaData = await facturaRes.json();
    if (!facturaData?.data?.id_factura) throw new Error("No se pudo generar la factura");

    const id_factura = facturaData.data.id_factura;

    // 4. Obtener carrito por email
    const resCart = await fetch(`https://redgas.onrender.com/CartGetByEmail?correo_cliente=${email}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const cartData = await resCart.json();

    if (!Array.isArray(cartData) || cartData.length === 0) {
      throw new Error("El carrito está vacío");
    }

    // 5. Registrar productos y actualizar stock
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

    // 6. Limpiar carrito
    await fetch(`https://redgas.onrender.com/CartClearByEmail?correo_cliente=${email}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

export default {
  PagoPaypal,
  CapturarPago,
  ProcesarPagoYGenerarFacturaPayPal
};
