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
  console.log("📌 Iniciando procesamiento de pago:", payment_id);

  const pago = await ConsultarPagoMercadoPago(payment_id);
  console.log("✅ Pago consultado:", pago);

  if (pago.status !== "approved") {
    console.log("❌ Pago no aprobado, se detiene el proceso.");
    return;
  }

  const total = pago.transaction_amount;
  const metadata = pago.metadata;
  const id_cliente = metadata?.id_cliente;
  const id_producto = metadata?.id_producto ?? null;

  if (!id_cliente) throw new Error("❌ No se encontró id_cliente en metadata");

  // Obtener empleado virtual
  console.log("🧑‍💼 Obteniendo empleado virtual...");
  const resEmpleado = await fetch("https://redgas.onrender.com/EmpleadoGet?correo_empleado=virtual@gmail.com");

  if (!resEmpleado.ok) {
    const text = await resEmpleado.text();
    throw new Error("❌ Error al obtener empleado: " + text);
  }

  const dataEmpleado = await resEmpleado.json();
  const id_empleado = dataEmpleado.data.id_empleado;
  console.log("✅ Empleado virtual obtenido:", id_empleado);

  // Registrar factura
  const fecha_factura = new Date().toISOString().split("T")[0];
  console.log("🧾 Registrando factura...");

  const facturaRes = await fetch("https://redgas.onrender.com/FacturaRegister", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fecha_factura, id_cliente, id_empleado, total }),
  });

  if (!facturaRes.ok) {
    const text = await facturaRes.text();
    throw new Error("❌ Error al registrar factura: " + text);
  }

  const facturaData = await facturaRes.json();
  const id_factura = facturaData.data.id_factura;
  console.log("✅ Factura registrada con ID:", id_factura);

  // Obtener carrito
  console.log("🛒 Obteniendo carrito del cliente...");
  const resCart = await fetch("https://redgas.onrender.com/CartGet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id_cliente }),
  });

  if (!resCart.ok) {
    const text = await resCart.text();
    throw new Error("❌ Error al obtener carrito: " + text);
  }

  const cartData: CarritoItem[] = await resCart.json();
  console.log("🛒 Carrito obtenido:", cartData);

  if (id_producto) {
    console.log("📦 Procesando compra individual...");
    const productoEnCarrito = cartData.find(item => item.productId === id_producto);
    const cantidad = productoEnCarrito?.quantity ?? 1;

    // PedidoProducto
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

    // Stock
    await fetch("https://redgas.onrender.com/ProductoUpdateStock", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_producto,
        stock: cantidad,
      }),
    });

    // Remover de carrito
    await fetch("https://redgas.onrender.com/CartRemove", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id_cliente,
        productId: id_producto,
      }),
    });

    console.log("✅ Producto individual procesado.");
  } else {
    console.log("📦 Procesando compra de todo el carrito...");

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
    await fetch("https://redgas.onrender.com/CartClear", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id_cliente }),
    });

    console.log("✅ Todos los productos del carrito procesados.");
  }

  console.log("🎉 Pago procesado correctamente y factura generada.");
};

export default {
  PagoMercadoPago,
  ConsultarPagoMercadoPago,
  ProcesarPagoYGenerarFactura
};
