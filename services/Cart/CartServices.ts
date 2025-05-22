import { redis } from "../../config/redis";

const cartServices = {
  async getCart(userId: string) {
    const data = await redis.get(`cart:${userId}`);
    return data ? JSON.parse(data) : [];
  },

  async addToCart(userId: string, item: { productId: string; quantity: number; price: number }) {
    const cart = await this.getCart(userId);

    const existing = cart.find((i: any) => i.productId === item.productId);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      cart.push(item);
    }

    await redis.set(`cart:${userId}`, JSON.stringify(cart));
    return cart;
  },

  async removeFromCart(userId: string, productId: string) {
    const cart = await this.getCart(userId);
    const updated = cart.filter((item: any) => item.productId !== productId);
    await redis.set(`cart:${userId}`, JSON.stringify(updated));
    return updated;
  },

  async clearCart(userId: string) {
    await redis.del(`cart:${userId}`);
  },

  async getTotal(userId: string) {
    const cart = await this.getCart(userId);
    return cart.reduce((sum: number, item: any) => sum + item.quantity * item.price, 0);
  },
};

export default cartServices;