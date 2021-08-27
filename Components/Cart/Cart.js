import { useShoppingCart } from 'use-shopping-cart'
import styles from './Cart.module.scss'
import Image from 'next/image'

const Cart = () => {
    const { formattedTotalPrice, redirectToCheckout, cartCount, cartDetails, clearCart, incrementItem, decrementItem } = useShoppingCart()
    const cartArr = Object.values(cartDetails);

    return (
        <div className={styles.cartInner}>
            {console.log(cartArr)}
                <ul className={styles.cartItems}>
                    { cartArr.map(item => {
                    return  <li key={item.id} className={styles.cartCard}>
                                <div className={styles.imageCont}>
                                    <Image className={styles.image} src={item.image} layout="fill" />
                                </div>
                                <div className={styles.blurb}>
                                    <p>{item.name}</p>
                                    <div className={styles.quantityCont}>
                                        <button onClick={() => decrementItem(item.id)}><i className="fas fa-minus-circle"></i></button>
                                        <p>Qty: {item.quantity}</p>
                                        <button onClick={() => incrementItem(item.id)}><i className="fas fa-plus-circle"></i></button>
                            
                                    </div>
                                </div>
                                    
                                    </li>
                    })}
                </ul>
            <div className={styles.cartInfo}>
                <p>({cartCount})<i className="fas fa-shopping-bag"></i></p>
                <p>Cart Total: {formattedTotalPrice}</p>
                <button className={styles.cartButton} onClick={() => clearCart()}>Clear Cart</button>
                <button className={styles.cartButton} onClick={() => redirectToCheckout()}>Checkout</button>
            </div>
            
        </div>
    )
}

export default Cart