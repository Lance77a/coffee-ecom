import styles from './BannerCont.module.scss'

const BannerCont = props => (
    <section className={styles.container}>
        {props.children}
    </section>
)

export default BannerCont