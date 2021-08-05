import { useShoppingCart } from 'use-shopping-cart'

export default function Checkout() {
    const {redirectToCheckout} = useShoppingCart();
    return(
        <div>
            hello, welcome to checkout page!
            <button onClick={() => redirectToCheckout()}>
                redirect to checkout
            </button>
        </div>
    )
}