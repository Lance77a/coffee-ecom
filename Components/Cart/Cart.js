import { useShoppingCart } from 'use-shopping-cart'
import styles from './Cart.module.scss'
import Image from 'next/image'
import empty_cart from '../../public/images/empty_cart.jpg'
import { useState } from 'react'

const Cart = () => {
    const { formattedTotalPrice, redirectToCheckout, cartCount, cartDetails, clearCart, incrementItem, decrementItem } = useShoppingCart()
    const cartArr = Object.values(cartDetails);
    const [ status, setStatus ] = useState('idle')
  
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
            <div className={styles.cartControls}>
                <p>({cartCount})<i className="fas fa-shopping-bag"></i></p>
                <p>Cart Total: {formattedTotalPrice}</p>
                <button className={styles.cartButton} onClick={() => clearCart()}>Clear Cart</button>
                <button className={styles.cartButton} onClick={handleCheckout}>Checkout</button>
            </div>
            { status !== 'idle' &&
                <div>
                    <p>{status}</p>
                </div>
            }
            { cartCount === 0
                ?   <div className={styles.emptyCartCont}>
                        <div className={styles.emptyImageCont}>
                            <Image src={empty_cart} className={styles.emptyImage} layout='fill' />
                        </div>
                        <p>Time to fill up</p>
                    </div>
                :   <ul className={styles.cartItems}>
                        { cartArr.map(item => {
                            return <li key={item.id} className={styles.cartCard}>
                                <div className={styles.imageCont}>
                                    <Image className={styles.image} src={item.image} layout="fill" />
                                </div>
                                <div className={styles.blurb}>
                                    <p>{item.name}({item.product_metadata.weight})</p>
                                    <p>{item.formattedPrice}</p>
                                    <div className={styles.quantityCont}>
                                        <button onClick={() => decrementItem(item.id)}><i className="fas fa-minus-circle"></i></button>
                                        <p>Qty: {item.quantity}</p>
                                        <button onClick={() => incrementItem(item.id)}><i className="fas fa-plus-circle"></i></button>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul> }
        </div>
    )
}

export default Cart