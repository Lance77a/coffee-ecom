import '../styles/globals.scss'
import Layout from '../Components/Layout/Layout'
import { CartProvider } from 'use-shopping-cart'
import getStripe from "../lib/stripe/getStripe";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CartProvider mode="payment"
      cartMode='client-only'
      stripe={getStripe}
      currency={"USD"}
      successUrl="https://stripe.com"
      cancelUrl="https://twitter.com/dayhaysoos"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}>
        <Component {...pageProps} />
      </CartProvider>
    </Layout>
  )
}

export default MyApp
