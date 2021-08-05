import Stripe from 'stripe'

export async function getProducts(){
    const stripe = await new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2020-08-27",
    });
    const products = await stripe.prices.list({
        active: true,
        limit: 10,
        expand: ["data.product"],
    });
    return { products };
}

export default function handler(req, res) {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${req.method} is not allowed` });
    } else {
      const products = getProducts();
      res.status(200).json(products);
    }
  }