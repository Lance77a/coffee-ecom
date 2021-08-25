import { useShoppingCart } from 'use-shopping-cart'
import styles from './Cart.module.scss'

const Cart = () => {
    const { totalPrice, redirectToCheckout, cartCount, clearCart, } = useShoppingCart()
    return (
        <div className={styles.cartInner}>
            <p>({cartCount})<i className="fas fa-shopping-bag"></i></p>
            <p>${totalPrice}</p>
            <button className={styles.cartButton} onClick={() => clearCart()}>Remove</button>
            <button className={styles.cartButton} onClick={() => redirectToCheckout()}>Checkout</button>
        </div>
    )
}

export default Cart