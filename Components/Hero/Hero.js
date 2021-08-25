import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <header className={styles.heroCont}>
            <h1 className={styles.heading}>Welcome, <span>Grab whatever bag you like!</span></h1>
            <div className={styles.heroBg} style={{backgroundImage: `url('/images/hero1.jpg')`}}></div>
        </header>
    )
}
    

export default Hero