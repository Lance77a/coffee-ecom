import { useShoppingCart } from 'use-shopping-cart'

export default function Checkout() {
    const {redirectToCheckout} = useShoppingCart();
    return(
        <div>
            hello, welcome to checkout page!
            <button onclick={() => redirectToCheckout()}>
                redirect to checkout
            </button>
        </div>
    )
}