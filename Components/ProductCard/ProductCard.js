import styles from './ProductCard.module.scss'
import Image from 'next/image'
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
                    <div className={styles.imageOverlay}></div>
                    <Image className={styles.image} src={`${product.product.images[0]}`} layout='fill' />
                </div>
                <div className={styles.textCont}>
                    <h1>{product.product.name}</h1>
                    <p>price: {displayPrice}</p>
                    <p className={styles.overlayDesc}>{product.product.description}</p>
                </div>
                <button className={styles.buyButton}onClick={() => addItem(addItemObject)}>Add To Cart</button>
        </div>
    )
}

export default ProductCard
