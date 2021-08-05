import { CartProvider } from "use-shopping-cart";
import getStripe from "../../lib/stripe/getStripe";

export default function Cart({ children }) {
  return (
    <CartProvider mode="payment"
    cartMode='client-only'
    stripe={getStripe()}
    currency={"USD"}
    successUrl="stripe.com"
    cancelUrl="twitter.com/dayhaysoos"
    allowedCountries={['US', 'GB', 'CA']}
    billingAddressCollection={true}>
      {children}
    </CartProvider>
  );
}
 