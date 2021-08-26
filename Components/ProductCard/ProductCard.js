import styles from './ProductCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'

const ProductCard = (product) => {
    const { addItem } = useShoppingCart();
    const currencyToDisplay = (num) => (num/100).toFixed(2);
    const displayPrice = currencyToDisplay(product.unit_amount)
    const addItemObject = {
                id: product.id,
                name: product.product.name,
                price: product.unit_amount,
                currency: product.currency,
            }
    return (
        <div className={styles.cardCont}>
                <div className={styles.imageCont}>
                    <Image className={styles.image} src={`${product.product.images[0]}`} layout='fill' />
                </div>
                <div className={styles.textCont}>
                        <h1>{product.product.name}</h1>
                        <p>price: {displayPrice}</p>
                        <p className={styles.overlayDesc}>{product.product.description}</p>
                </div>
                <Link href={`/shop/product/${product.product.id}`}>
                        <a className={styles.linkOverlay}></a>
                </Link>
                <button className={styles.buyButton}onClick={() => addItem(addItemObject)}>
                    <span>Add To Cart</span>
                </button>
        </div>
    )
}

export default ProductCard
