import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.footerCont}>
            <p>Terms and Conditions</p>
            <Link href='/info'>
                <a className={styles.tooltipText} tooltip='Click For Site Details' >
                    Bean bag Coffee <i className="fas fa-info-circle"></i>
                </a>
            </Link>
            <p>Shipping and Return Policies</p>
        </div>
    )
}

export default Footer