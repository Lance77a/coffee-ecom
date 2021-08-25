import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className={styles.layoutCont}>
      <Head>
        <title>Bean Bag Coffee</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" 
        crossorigin="anonymous"></link>
        <meta name="description" content="Ecommerce store made with Stripe Api and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <Navbar />
        <main>{children}</main>
      <Footer />
    </div>
  )
}