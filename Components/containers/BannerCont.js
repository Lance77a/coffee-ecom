import styles from './BannerCont.module.scss'

const BannerCont = props => (
    <section className={styles.container}>
        <ul>
            {props.children}
        </ul>
    </section>
)

export default BannerCont