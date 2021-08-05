import { useShoppingCart } from 'use-shopping-cart'
import ProductCard from '../Components/ProductCard/ProductCard'
import Stripe from 'stripe'

export default function Shop({products}) {
  /* Gets the totalPrice and a method for redirecting to stripe */
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()

  return (
    <div>

      {/* This is where we'll render our cart */}
      <p>Number of Items: {cartCount}</p>
      <p>Total: {totalPrice}</p>
      

      {/* Redirects the user to Stripe */}
      <button onClick={() => redirectToCheckout()}>Checkout</button>

      <ul>
       {products.map(item => ( <ProductCard key={item.id} {...item} /> ))}
      </ul>
    </div>
  )
}

export const getServerSideProps = async () => {

  const stripe = await new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2020-08-27",
  });

  const prices = await stripe.prices.list({
      active: true,
      limit: 10,
      expand: ["data.product"],
  });

  return { props: { products: prices.data } };
};