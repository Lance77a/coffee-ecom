import styles from './LargeCont.module.scss';

const LargeCont = props => (
    <section className={styles.container}>
        {props.children}
    </section>
)

export default LargeCont