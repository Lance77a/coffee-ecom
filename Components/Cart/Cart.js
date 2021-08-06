import { useShoppingCart } from 'use-shopping-cart'
import styles from './Cart.module.scss'

const Cart = () => {
    const { totalPrice, redirectToCheckout, cartCount, clearCart, } = useShoppingCart()
    return (
        <div className={styles.cartInner}>
            <p>({cartCount})<i class="fas fa-shopping-cart"></i></p>
            <p>${totalPrice}</p>
            <button className={styles.cartButton} onClick={() => clearCart()}>Remove all items</button>
            <button className={styles.cartButton} onClick={() => redirectToCheckout()}>Checkout Now</button>
        </div>
    )
}

export default Cart