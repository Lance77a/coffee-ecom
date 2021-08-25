import styles from './Hero.module.scss'
import Link from 'next/link'

const Hero = () => {
    return (
        <header className={styles.heroCont}>
            <div className={styles.heading}>
                <h1>Welcome,
                    <span> Grab a bag, <Link href='/shop'>
                            <a>any bag!</a>
                        </Link>
                    </span>
                </h1>
            </div>
            <div className={styles.heroBg} style={{backgroundImage: `url('/images/hero1.jpg')`}}></div>
        </header>
    )
}
    

export default Hero