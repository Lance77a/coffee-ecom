import styles from '../styles/success.module.scss'

export default function Success() {
  return (
    <div className={styles.successCont}>
      <h2>Thank you for your order!</h2>
      <p>A receipt will be sent to your email shortly.</p>
    </div>
  )
}