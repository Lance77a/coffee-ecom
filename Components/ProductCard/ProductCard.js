import styles from './ProductCard.module.scss'

const ProductCard = (props) => (
    <figure>
        <h1>{props.productName}</h1>
        <p>price: {props.price}</p>
        <p>{props.desc}</p>
        <button onClick={props.buttonHandler}>Buy Me?</button>
    </figure>
)

export default ProductCard