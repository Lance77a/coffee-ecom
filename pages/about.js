import styles from '../styles/about.module.scss'
import location from '../public/images/location.jpg'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
    const [ value1, setValue1 ] = useState('')
    const [ value2, setValue2 ] = useState('')
    const [ value3, setValue3 ] = useState('')

    const contact = {
        address: "Pike Place, 84 Pine St, Seattle, WA 98101",
        email: "ContactUs@BeanBagCoffee.com",
        phone: "206-626-2066",
    }

    const formHandler = (e) => {
        e.preventDefault()
        setValue1('')
        setValue2('')
        setValue3('')
        alert('Thanks for contacting us!');
    }
    return (
        <div className={styles.container}>
            <div className={styles.infoCont} >
                <div className={styles.imageCont}>
                    <Image className={styles.image} src={location} alt='Brickwall with an arrow sign to the Roastery' layout='fill' />
                </div>
                <div className={styles.blurb}>
                    <p>Our Roastery is located in Downtown Seattle, just outside the famous Pike Place Market.</p>
                    <p>{contact.address}</p>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </div>
            </div>
            <div className={styles.formCont} >
                <h3>Contact Us: </h3>
                <form onSubmit={formHandler}>

                    <div className={styles.formItem} >
                        <label htmlFor="Name" >Name: </label>
                        <input type="text" id="Name" name="Name" 
                        value={value1} onChange={(e) => setValue1(e.target.value)}
                        required />
                    </div>

                    <div className={styles.formItem} >
                        <label htmlFor="Email" >Email: </label>
                        <input type="email" id="Email" name="Email"
                        value={value2} onChange={(e) => setValue2(e.target.value)}
                        required />
                    </div>

                    <div className={styles.formItem} >
                        <label htmlFor="Message" >Your message: </label>
                        <textarea id="Message" name="Message" rows="6" maxLength="3000"
                        value={value3} onChange={(e) => setValue3(e.target.value)}
                        required></textarea>
                    </div>
                    <button type="submit" >Send Message</button>
                </form>
            </div>
        </div>
    )
}