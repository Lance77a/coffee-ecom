import { useShoppingCart } from 'use-shopping-cart'
import ProductCard from '../Components/ProductCard/ProductCard'

const productData = [
  {
    name: 'Bananas',
    description: 'Yummy yellow fruit',
    id: 'id_banana001',
    price: 400,
    currency: 'USD',
    image: 'https://my-image.com/banana.jpg'
  },
]

export default function Shop() {
  /* Gets the totalPrice and a method for redirecting to stripe */
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()

  return (
    <div>

      {/* This is where we'll render our cart */}
      <p>Number of Items: {cartCount}</p>
      <p>Total: {totalPrice}</p>
      

      {/* Redirects the user to Stripe */}
      <button onClick={() => redirectToCheckout()}>Checkout</button>
    </div>
  )
}