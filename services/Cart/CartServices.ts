import redis from "../../config/redis";

interface CartItem {
  productId: string;
  productName: string; 
  quantity: number;
  price: number;
}

type Cart = CartItem[];

async function getCart(userId: string): Promise<Cart> {
  const data = await redis.get(`cart:${userId}`);
  return data ? JSON.parse(data) : [];
}

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

async function removeFromCart(userId: string, productId: string): Promise<Cart> {
  const cart = await getCart(userId);
  const updated = cart.filter(item => item.productId !== productId);
  await redis.set(`cart:${userId}`, JSON.stringify(updated));
  return updated;
}

async function clearCart(userId: string): Promise<void> {
  await redis.del(`cart:${userId}`);
}

async function getTotal(userId: string): Promise<number> {
  const cart = await getCart(userId);
  return cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

export const cartServices = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  getTotal,
};

export default cartServices;