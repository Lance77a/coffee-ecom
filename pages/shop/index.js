import ProductCard from '../../Components/ProductCard/ProductCard'
import Stripe from 'stripe'
import styles from '../../styles/shop.module.scss'

export default function Shop({products}) {
  return (
    <section className={styles.productDisplay}>
      <ul className={styles.innerDisplay}>
          {products.map(item => {
            return (
              <li key={item.id} className={styles.productCont}>
                <ProductCard {...item} />
              </li>
          )})}
      </ul>
    </section>
  )
}

export const getServerSideProps = async () => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2020-08-27",
    });

    const prices = await stripe.prices.list({
        active: true,
        limit: 10,
        expand: ["data.product"],
    });
    return { props: { products: prices.data } };
  } catch (err){
    console.log(err);
  }
};