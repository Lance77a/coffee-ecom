import Head from 'next/head'
import Hero from '../Components/Hero/Hero'
import LargeCont from '../Components/containers/LargeCont'
import BannerCont from '../Components/containers/BannerCont'
import ImageAside from '../Components/ImageAside/ImageAside'
import ProductCard from '../Components/ProductCard/ProductCard'
// import styles from '../styles/index.module.scss'
import { useShoppingCart } from 'use-shopping-cart'
import Stripe from 'stripe'

export default function Home({prices}) {
  const { totalPrice, redirectToCheckout, cartCount, clearCart, } = useShoppingCart()
  {console.log(prices)}

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LargeCont>
          <Hero />
        </LargeCont>
        <BannerCont>
          <ImageAside />
        </BannerCont>
        {/* <BannerCont>
          {products.map(item => ( <ProductCard key={item.id} {...item} /> ))}
        </BannerCont> */}
        <p>Number of Items: {cartCount}</p>
        <p>Total: {totalPrice}</p>
        <button onClick={() => clearCart()}>Remove all items</button>
        <button onClick={() => redirectToCheckout()}></button>
      </main>
    </div>
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
    return { props: { prices } };
  } catch (err){
    console.log(err);
  }
};