import styles from '../styles/info.module.scss'

const info = {
    author: 'Lance Avitia',
    stack: 'React / Next.js || SASS || Stripe API',
    desc: 'A production ready Ecommerce site using Stripe for product creation and secure checkout. And Next.js on the front end providing a snappy mobile app feel with static page generation for perfect SEO practices.',
    siteName: 'Bean Bag Coffee',
    devHref: 'https://www.lanceadev.com/'
}

export default function Info() {
  return (
    <>
      <div className={styles.infoCont}>
          <div className={styles.headerCont}>
              <h2>{info.siteName}</h2>
              <p>{info.stack}</p>
          </div>
        
        <p className={styles.desc}>{info.desc}</p>
        <p>Created By: {info.author} - <a href={info.devHref}>LanceADev.com</a></p>
      </div>
      <p className={styles.imageCredit}>All images courtesy of <a href="https://unsplash.com/">Unsplash</a> & <a href="https://www.vecteezy.com/free-vector/shop">Vecteezy</a></p>
    </>
  )
}