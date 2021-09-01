import styles from '../styles/info.module.scss'

const info = {
    author: 'Lance Avitia',
    stack: 'React / Next.js || SASS || Stripe API',
    desc: 'A production ready Ecommerce site using Stripe for product creation and secure checkout. And Next.js on the front end providing a snappy mobile app feel with static page generation for perfect SEO practices.',
    siteName: 'Bean Bag Coffee',
    sitePurpose: ''
}

export default function Info() {
  return (
    <div className={styles.infoCont}>
        <div className={styles.headerCont}>
            <h2>{info.siteName}</h2>
            <p>{info.stack}</p>
        </div>
      
      <p className={styles.desc}>{info.desc}</p>
      <p>Created By: {info.author}</p>
    </div>
  )
}