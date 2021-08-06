import Hero from '../Components/Hero/Hero'
import LargeCont from '../Components/containers/LargeCont'
import BannerCont from '../Components/containers/BannerCont'
import ImageAside from '../Components/ImageAside/ImageAside'
import ProductCard from '../Components/ProductCard/ProductCard'
import styles from '../styles/index.module.scss'

import Stripe from 'stripe'

export default function Home({prices}) {
  return (
    <div>
      <main>
        <LargeCont>
          <Hero />
        </LargeCont>
        <BannerCont>
          <ImageAside />
        </BannerCont>
        <BannerCont>
          {prices.map(item => ( <ProductCard key={item.id} {...item} /> ))}
        </BannerCont>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const prices = await stripe.prices.list({
      active: true,
      limit: 10,
      expand: ["data.product"],
    });

    return { props: { prices: prices.data } };
  } catch (err){
    console.log(err);
  }
};