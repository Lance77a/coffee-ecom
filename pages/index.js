import Head from 'next/head'
import Hero from '../Components/Hero/Hero'
import LargeCont from '../Components/containers/LargeCont'
import BannerCont from '../Components/containers/BannerCont'
import ImageAside from '../Components/ImageAside/ImageAside'
import ProductCard from '../Components/ProductCard/ProductCard'
import { createCheckoutSession } from 'next-stripe/client';
import styles from '../styles/index.module.scss'
import getStripe from "../lib/stripe/getStripe";
import getProducts from '../lib/stripe/GetProducts'

export default function Home({products}) {
  
  const onClick = async (priceId) => {
    const session = await createCheckoutSession({
      success_url: window.location.href,
      cancel_url: window.location.href,
      line_items: [{ price: priceId, quantity: 1 }],
      payment_method_types: ["card"],
      mode: "payment",
    });
    const stripe = await getStripe();
    try {
      stripe.redirectToCheckout({ sessionId: session.id });
    }
    catch {
      console.log(e)
    }
  };

  return (
    <div>
      {console.log(getStripe())}
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
        <BannerCont>
          {products.map(item => (
              <ProductCard productName={item.product.name} price={((item.unit_amount) / 100).toFixed(2)}
              image={item.product.images[0]} desc={item.product.description} buttonHandler={() => onClick(item.id)} key={item.id}/>
            ))
          }
        </BannerCont>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  return getProducts();
};
