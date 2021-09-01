import styles from './AboutAside.module.scss'
import Image from 'next/image'
import about1 from '../../public/images/about1.jpg'
import about2 from '../../public/images/about2.jpg'
import about3 from '../../public/images/about3.jpg'

const cardArr = [
    {
        image: about1,
        title: "Verifiably Sourced",
        blurb: "Our beans come straight from our network of farmers. Check out the QR code on the back of your bag to find the origin."
    },
    {
        image: about2,
        title: "Beautifully Blended",
        blurb: "Our expert team of master roasters bring the best out of our beans by blending them to perfection. Culminating in a taste that's sure to delight your palate."
    },
    {
        image: about3,
        title: "Only Fresh",
        blurb: "We roast our beans to order. Guaranteeing that your beans are at their best when they arrive at your door."
    },
]

const AboutAside = () => {
    return (
        <div className={styles.outer}>
            <ul className={styles.container}>
                {cardArr.map(item => {
                    return (
                    <li className={styles.aboutCard} key={item.title}>
                        <div className={styles.imageCont}>
                            <Image className={styles.image} src={item.image} alt={item.title} layout='fill' />
                        </div>
                        <div className={styles.blurb}>
                            <h2>{item.title}</h2>
                            <p>{item.blurb}</p>
                        </div>
                        
                    </li>
                )})}
            </ul>
        </div>
    )
}
    

export default AboutAside