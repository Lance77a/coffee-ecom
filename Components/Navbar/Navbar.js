import Link from 'next/link';
import styles from './Navbar.module.scss'
import Cart from '../Cart/Cart';
import { useState } from 'react';

const NavData = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Shop',
        href: '/shop'
    },
    {
        name: 'About',
        href: '/about'
    },
]

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen ] = useState(false)
    const [ navOpen, setNavOpen ] = useState(false)
    const [ cartOpen, setCartOpen ] = useState(false);

    const toggleNav = () => {
        setCartOpen(false)
        navOpen === false ? setNavOpen(true) : setNavOpen(false)
    }
    const toggleCart = () => {
        setNavOpen(false)
        cartOpen === false ? setCartOpen(true) : setCartOpen(false)
    }

    return (
        <nav className={styles.navbarCont}>
            <div className={styles.logoCont}>
                <Link href='/'>
                    <a className={styles.logo}>
                        <img src='/images/bean-bag.svg' alt="Company Logo" />
                        <h1>Bean Bag Coffee</h1>
                    </a>
                </Link>
           </div>
            <div className={styles.navMenu}>
                <div className={styles.navToggles}>
                    <button className={styles.navToggle} onClick={() => toggleNav()}>
                        {navOpen === false ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
                    </button>
                    <button className={styles.navToggle} onClick={() => toggleCart()}>
                        {cartOpen === false ? <i className="fas fa-shopping-bag"></i> : <i className="fas fa-times"></i>}
                    </button>
                </div>
                
                <div className={styles.dropdownCont}>
                    {navOpen === true && 
                        <ul className={navOpen === false ? `${styles.navDropdown}` : `${styles.navDropdown} ${styles.navDropdownOpen}`}>
                            {NavData.map(item => {
                                return (
                                    <li key={item.name} className={styles.navItem}>
                                        <Link href={item.href}>
                                            <a>{item.name}</a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                    {cartOpen === true && 
                       <Cart />
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar