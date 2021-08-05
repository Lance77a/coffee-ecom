import Stripe from 'stripe'

const getProducts = async() => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2020-08-27",
    });

    const prices = await stripe.prices.list({
        active: true,
        limit: 10,
        expand: ["data.product"],
    });

    return { props: { products: prices.data } };
};

export default getProducts