import { useShoppingCart } from 'use-shopping-cart'
import styles from './Cart.module.scss'
import Image from 'next/image'
import empty_cart from '../../public/images/empty_cart.jpg'
import { useState } from 'react'
import CartCard from './CartCard'

const Cart = () => {
    const { formattedTotalPrice, redirectToCheckout, cartCount, cartDetails, clearCart } = useShoppingCart()
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
                            return <CartCard key={item.id} 
                            image={item.image}
                            name={item.name} 
                            size={item.product_metadata.size}
                            price={item.formattedPrice}
                            id={item.id}
                            quantity={item.quantity}
                            />
                        })}
                    </ul>
            }
        </div>
    )
}

export default Cart