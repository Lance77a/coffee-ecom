import Stripe from 'stripe'
import Image from 'next/image'
import styles from '../../../styles/product.module.scss'
import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export default function Product({product}) {
    const { addItem } = useShoppingCart()
    const [ quantity, setQuantity ] = useState(undefined)

    const item = product.data[0];
    const quantityArr = [1,2,3,4,5]
    const currencyToDisplay = (num) => (num/100).toFixed(2);
    const displayPrice = currencyToDisplay(item.unit_amount)
    const addItemObject = {
        id: item.id,
        sku: item.product.id,
        name: item.product.name,
        price: item.unit_amount,
        currency: item.currency,
        image: item.product.images[0],
        description: item.product.unit_label,
    }

    const handleChange = (e) => setQuantity(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(addItemObject, { count: parseInt(quantity, 10) } )
        setQuantity(1)
    }
    
    return (
        <section className={styles.productCont}>
            <div className={styles.imageCont}>
                <Image className={styles.image} src={item.product.images[0]} alt={item.product.description} layout='fill'/>
            </div>
            <div className={styles.blurb}>
                <div className={styles.blurbHeader}>
                    <h1>{item.product.name}</h1>
                    <p>${displayPrice}</p>
                </div>
                <p className={styles.desc} >{item.product.description}</p>
                <form className={styles.formCont} onSubmit={handleSubmit}>
                    <label htmlFor="quantity">{item.product.unit_label} Bag: </label>
                    <select onChange={handleChange} value={quantity} name="quantity" id="quantity">
                        {quantityArr.map(item => {
                            return <option key={item} value={item} >{item}</option>
                        })}
                    </select>
                    <button>Add To Cart</button>
                </form>
            </div>
        </section>
    )
}

  export const getServerSideProps = async (context) => {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
          apiVersion: "2020-08-27",
      });
      
      const product = await stripe.prices.list({
        active: true,
        product: context.params.id,
        expand: ["data.product"],
      });

      return { props: { product } };
    } catch (err){
      console.log(err);
    }
  };