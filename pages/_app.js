import '../styles/globals.scss'
import Layout from '../Components/Layout/Layout'
import { CartProvider } from 'use-shopping-cart'
import getStripe from "../lib/stripe/getStripe";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CartProvider mode="checkout-session" stripe={getStripe()} currency={"usd"}>
        <Component {...pageProps} />
      </CartProvider>
    </Layout>
  )
}

export default MyApp
