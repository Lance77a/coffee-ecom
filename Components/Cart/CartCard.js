import styles from './CartCard.module.scss'
import { useShoppingCart } from 'use-shopping-cart'
import Image from 'next/image'

const CartCard = (item) => {
    const { incrementItem, decrementItem } = useShoppingCart()
    return (
        <li className={styles.cartCard}>
            <div className={styles.imageCont}>
                <Image className={styles.image} src={item.image} layout="fill" />
            </div>
            <div className={styles.blurb}>
                <p>{item.name}({item.size})</p>
                <p>{item.price}</p>
                <div className={styles.quantityCont}>
                    <button onClick={() => decrementItem(item.id)}><i className="fas fa-minus-circle"></i></button>
                    <p>Qty: {item.quantity}</p>
                    <button onClick={() => incrementItem(item.id)}><i className="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </li>
    )
}

export default CartCard