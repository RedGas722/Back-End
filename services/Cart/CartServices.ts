import { redis } from "../../config/redis";

interface CartItem {
  productId: string;
  productName: string; 
  quantity: number;
  price: number;
}

type Cart = CartItem[];

// Obtener carrito
async function getCart(userId: string): Promise<Cart> {
  const data = await redis.get(`cart:${userId}`);
  return data ? JSON.parse(data) : [];
}

// Agregar producto al carrito
async function addToCart(userId: string, item: CartItem): Promise<Cart> {
  const cart = await getCart(userId);

  const existing = cart.find(i => i.productId === item.productId);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  await redis.set(`cart:${userId}`, JSON.stringify(cart));
  return cart;
}

// Remover producto del carrito
async function removeFromCart(userId: string, productId: string): Promise<Cart> {
  const cart = await getCart(userId);
  const updated = cart.filter(item => item.productId !== productId);
  await redis.set(`cart:${userId}`, JSON.stringify(updated));
  return updated;
}

// Limpiar carrito completo
async function clearCart(userId: string): Promise<void> {
  await redis.del(`cart:${userId}`);
}

// Obtener total del carrito
async function getTotal(userId: string): Promise<number> {
  const cart = await getCart(userId);
  return cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

// Actualizar cantidad de un producto en el carrito
async function updateProductQuantity(userId: string, productId: string, quantity: number): Promise<Cart> {
  if (quantity < 1) throw new Error("La cantidad debe ser al menos 1");

  const cart = await getCart(userId);
  const product = cart.find(item => item.productId === productId);

  if (!product) {
    throw new Error("Producto no encontrado en el carrito");
  }

  product.quantity = quantity;

  await redis.set(`cart:${userId}`, JSON.stringify(cart));
  return cart;
}

export const cartServices = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  getTotal,
  updateProductQuantity,
};

export default cartServices;
