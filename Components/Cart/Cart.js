import { useShoppingCart } from 'use-shopping-cart'
import styles from './Cart.module.scss'
import { useState } from 'react'
import CartCard from '../CartCard/CartCard'

const Cart = (props) => {
    const { formattedTotalPrice, redirectToCheckout, cartCount, cartDetails, clearCart } = useShoppingCart()
    const cartArr = Object.values(cartDetails);
    const [status, setStatus] = useState('idle')

    async function handleCheckout(event) {
        event.preventDefault()
        if (cartCount > 0) {
            setStatus('Redirecting To Checkout...')
            const error = await redirectToCheckout()
            if (error) setStatus('Something Went Wrong, Please Try Again.')
        } else {
            setStatus('Your Cart Is Empty')
        }
    }

    return (
        <div className={styles.cartInner}>
            {console.log(cartArr)}
            <div className={styles.cartControls}>
                <div>
                    <p>Cart Total: {formattedTotalPrice}</p>
                    <p>({cartCount})<i className="fas fa-shopping-bag"></i></p>
                </div>
                <div className={styles.statusCont}>
                    {status !== 'idle' && <p>{status}</p>}
                </div>
                <div>
                    <button className={styles.cartButton} onClick={() => clearCart()}>Clear Cart</button>
                    <button className={styles.cartButton} onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
            <ul className={styles.cartItems}>
                {cartArr.map(item => {
                    return (
                        <CartCard key={item.id}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                            price={item.formattedPrice}
                            id={item.id}
                            prod_id={item.sku}
                            quantity={item.quantity}
                            toggleCart={props.toggleCart}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Cart