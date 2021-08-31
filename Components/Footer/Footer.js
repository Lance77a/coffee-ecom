import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footerCont}>
            <p>Terms and Conditions</p>
            <p><i className="fas fa-info"></i> Bean bag Coffee</p>
            <p>Shipping and Return Policies</p>
        </div>
    )
}

export default Footer