import mercadoPagoClient from "../../Helpers/ConfigMercadoPago";
import createPreference from "mercadopago/dist/clients/preference/create";
import getPayment from "mercadopago/dist/clients/payment/get"; // SDK v2

interface PagoMercadoPagoParams {
  cantidad: string;
  referencia: string;
  email: string;
  nombre?: string;
  telefono?: string;
  direccion?: string;
}

  const ProcesarPagoYGenerarFactura = async (payment_id: string) => {
    const pago = await ConsultarPagoMercadoPago(payment_id);
    console.log(pago)
    if (pago.status !== "approved") return;

    const email = pago.payer?.email;
    const total = pago.transaction_amount;
    console.log("Procesando pago para el cliente:", email, "con total:", total);
    // Obtener cliente por email
    const clienteRes = await fetch(`https://redgas.onrender.com/ClienteGet?correo_cliente=${email}`);
    const clienteData = await clienteRes.json();
    if (!clienteData?.data?.id_cliente) throw new Error("Cliente no encontrado");

    const id_cliente = clienteData.data.id_cliente;

    // Obtener empleado virtual
    const resEmpleado = await fetch("https://redgas.onrender.com/EmpleadoGet?correo_empleado=virtual@gmail.com");
    const dataEmpleado = await resEmpleado.json();
    const id_empleado = dataEmpleado.data.id_empleado;

    // Registrar factura
    const fecha_factura = new Date().toISOString().split("T")[0];
    const facturaRes = await fetch("https://redgas.onrender.com/FacturaRegister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fecha_factura, id_cliente, id_empleado, total }),
    });

    const facturaData = await facturaRes.json();
    const id_factura = facturaData.data.id_factura;

    // Obtener carrito por email
    const resCart = await fetch("https://redgas.onrender.com/CartGetByEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const cartData = await resCart.json();

    // Registrar productos y actualizar stock
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

    // Limpiar carrito
    await fetch("https://redgas.onrender.com/CartClearByEmail", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  };

const PagoMercadoPago = async ({ cantidad, referencia, email }: PagoMercadoPagoParams) => {
  const preference = {
    items: [
      {
        id: referencia,
        title: `Producto: ${referencia}`,
        quantity: 1,
        currency_id: "COP",
        unit_price: parseFloat(cantidad),
      }
    ],
    payer: {
      email: email,
    },
    back_urls: {
      success: "https://redgas-one.vercel.app/Shopping/ConfirmacionMercadoPago",
      failure: "https://redgas-one.vercel.app/Shopping/Cancelado",
      pending: "https://redgas-one.vercel.app/Shopping/Pendiente"
    },
  };
  const result = await createPreference({
    config: mercadoPagoClient,
    body: preference,
  });

  return result;
};

const ConsultarPagoMercadoPago = async (payment_id: string) => {
  const result = await getPayment({ config: mercadoPagoClient, id: payment_id });

  if (!result || !result.id) {
    throw new Error("No se pudo obtener la información del pago");
  }

  return result; // directamente, sin .body
};

export default {
  PagoMercadoPago,
  ConsultarPagoMercadoPago,
  ProcesarPagoYGenerarFactura
};
