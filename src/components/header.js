// assets
import styles from '../styles/Header.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

// tools
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {

    const router = useRouter()

    return (
        <div className={styles.header}>
            <div className={styles.logo}>DIMIOUR</div>

            <div className={styles.right_content}>
                <div className={styles.links}>
                    <Link href="/"><div style={{color: router.asPath === '/' ? '#fff' : '#999'}} className={styles.link}>Home</div></Link>
                    <Link href="/about-us"><div style={{color: router.asPath === '/about-us' ? '#fff' : '#999'}} className={styles.link}>About</div></Link>
                    <Link href="services"><div style={{color: router.asPath === '/services' ? '#fff' : '#999'}} className={styles.link}>Services</div></Link>
                    <Link href="portfolio"><div style={{color: router.asPath === '/portfolio' ? '#fff' : '#999'}} className={styles.link}>Portfolio</div></Link>
                    <Link href="contact-us"><div style={{color: router.asPath === '/contact-us' ? '#fff' : '#999'}} className={styles.link}>Contact</div></Link>
                </div>
                
                <div className={styles.search_box}>
                    <div className={styles.search_icon}><FontAwesomeIcon icon={faSearch} /></div>
                    <input className={styles.search_input} type='text' placeholder='Search ...' />
                </div>
            </div>

            <div className={styles.menu_btn}><FontAwesomeIcon icon={faBars} /></div>
        </div>
    )
}

export default Header