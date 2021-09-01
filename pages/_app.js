import '../styles/globals.scss'
import Layout from '../Components/Layout/Layout'
import { CartProvider } from 'use-shopping-cart'
import '@stripe/stripe-js';

function MyApp({ Component, pageProps }) {
  return (
      <CartProvider mode="payment"
      cartMode='client-only'
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      currency={"USD"}
      successUrl="https://coffee-ecom.vercel.app/success"
      cancelUrl="https://coffee-ecom.vercel.app/"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
  )
}

export default MyApp