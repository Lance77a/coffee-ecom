import styles from './Hero.module.scss'
import StyledButton from '../StyledButton/StyledButton'

const Hero = () => {
    return (
        <div className={styles.heroInner} style={{backgroundImage: `url('/images/hero1.jpg')`}}>
            <StyledButton content='Welcome' />
        </div>
    )
}
    

export default Hero