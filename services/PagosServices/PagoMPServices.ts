import mercadoPagoClient from "../../Helpers/ConfigMercadoPago";
import createPreference from "mercadopago/dist/clients/preference/create";
import getPayment from "mercadopago/dist/clients/payment/get";

interface PagoMercadoPagoParams {
  cantidad: string;
  referencia: string;
  email: string;
  nombre?: string;
  telefono?: string;
  direccion?: string;
  id_cliente: number;
  id_producto?: number | null;
}

const PagoMercadoPago = async ({
  cantidad,
  referencia,
  email,
  nombre,
  telefono,
  direccion,
  id_cliente,
  id_producto = null
}: PagoMercadoPagoParams) => {
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
    payer: { email },
    back_urls: {
      success: "https://redgas-one.vercel.app/Shopping/ConfirmacionMercadoPago",
      failure: "https://redgas-one.vercel.app/Shopping/Cancelado",
      pending: "https://redgas-one.vercel.app/Shopping/Pendiente"
    },
    metadata: {
      id_cliente,
      id_producto
    }
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

  return result;
};

const ProcesarPagoYGenerarFactura = async (payment_id: string) => {
  const pago = await ConsultarPagoMercadoPago(payment_id);
  if (pago.status !== "approved") return;

  const total = pago.transaction_amount;

  const metadata = pago.metadata;
  const id_cliente = metadata?.id_cliente;
  const id_producto = metadata?.id_producto ?? null;

  if (!id_cliente) throw new Error("No se encontró id_cliente en metadata");

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

  if (id_producto) {
    // Registrar producto individual
    await fetch("https://redgas.onrender.com/PedidoProductoRegister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_factura,
        id_producto,
        estado_pedido: "aprobado",
        cantidad_producto: 1,
      }),
    });

    await fetch("https://redgas.onrender.com/ProductoUpdateStock", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_producto,
        stock: 1,
      }),
    });

  } else {
    // Obtener carrito por cliente
    const resCart = await fetch(`https://redgas.onrender.com/CartGetByIdCliente?id_cliente=${id_cliente}`);
    const cartData = await resCart.json();

    // Registrar productos del carrito
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
  PagoMercadoPago,
  ConsultarPagoMercadoPago,
  ProcesarPagoYGenerarFactura
};
