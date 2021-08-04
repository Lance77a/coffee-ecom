import Link from 'next/link';
import styles from './Navbar.module.scss'

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
    return (
        <nav className={styles.navbarCont}>
            <ul className={styles.navbarInner}>
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
        </nav>
    )
}

export default Navbar