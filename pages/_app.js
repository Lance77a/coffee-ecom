import '../styles/globals.scss'
import Layout from '../Components/Layout/Layout'
import { CartProvider } from 'use-shopping-cart'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CartProvider mode="payment"
      cartMode='client-only'
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
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
