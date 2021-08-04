import styles from './StyledButton.module.scss'

const StyledButton = (props) => (
    <button className={styles.button}>
        <p className={styles.content}>{props.content}</p>
    </button>
)

export default StyledButton