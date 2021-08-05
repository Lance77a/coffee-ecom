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
    console.log(addItemObject)
    return (
        <li>
            <figure className={styles.cardCont}>
                <div>
                    <Image src={`${product.product.images[0]}`} height={100} width={100} layout='responsive' />
                </div>
                <h1>{product.product.name}</h1>
                <p>price: {displayPrice}</p>
                <p>{product.product.description}</p>
                <button onClick={() => addItem(addItemObject)}>Buy Me?</button>
            </figure>
        </li>
    )
}

export default ProductCard
