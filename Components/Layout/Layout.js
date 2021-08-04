import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.layoutCont}>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </div>
  )
}