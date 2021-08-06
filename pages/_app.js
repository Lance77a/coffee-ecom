import '../styles/globals.scss'
import Layout from '../Components/Layout/Layout'
import { CartProvider } from 'use-shopping-cart'
import '@stripe/stripe-js';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CartProvider mode="payment"
      cartMode='client-only'
      stripe={"pk_test_51JKYVWByqALDynDix3ePZb5cGSGvTqqmMQmeHIZmnIPV3YZt4hRftUAgZuV7R4HFcr4pPhdmHXf8bPsBXhn992HU00NqtKjhkt"}
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
