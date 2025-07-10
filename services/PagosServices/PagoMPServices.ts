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

interface CarritoItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  discount: number;
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

  // ✅ Obtener carrito una sola vez
  const resCart = await fetch(`https://redgas.onrender.com/CartGetNoToken?id=${id_cliente}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  const cartData: CarritoItem[] = await resCart.json();

  if (id_producto) {
    const productoEnCarrito = cartData.find(item => item.productId === id_producto);
    const cantidad = productoEnCarrito?.quantity ?? 1;

    await fetch("https://redgas.onrender.com/PedidoProductoRegister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_factura,
        id_producto,
        estado_pedido: "aprobado",
        cantidad_producto: cantidad,
      }),
    });

    await fetch("https://redgas.onrender.com/ProductoUpdateStock", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_producto,
        stock: cantidad,
      }),
    });

    await fetch("https://redgas.onrender.com/CartRemove", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id_cliente,
        productId: id_producto
      })
    });

  } else {
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

    await fetch("https://redgas.onrender.com/CartClear", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id_cliente
      })
    });
  }
};

export default {
  PagoMercadoPago,
  ConsultarPagoMercadoPago,
  ProcesarPagoYGenerarFactura
};
