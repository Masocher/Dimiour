// assets
import styles from '../styles/Header.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons'

// tools
import Link from 'next/link'
import { useRouter } from 'next/router'

// components
import PopUp from './pop-up'

// redux
import { useDispatch } from 'react-redux'
import { openPopUp, closePopUp } from '../components/redux/actions'

const Header = () => {

    const router = useRouter()

    const dispatch = useDispatch()

    return (
        <div className={styles.header}>
            <PopUp/>
            
            <div className={styles.logo}>DIMIOUR</div>

            <div className={styles.right_content}>
                <div className={styles.links}>
                    <Link href="/"><div style={{color: router.asPath === '/' ? '#fff' : '#999'}} className={styles.link}>Home</div></Link>
                    <Link href="/about-us"><div style={{color: router.asPath === '/about-us' ? '#fff' : '#999'}} className={styles.link}>About</div></Link>
                    <Link href="services"><div onMouseEnter={() => dispatch(openPopUp())} onMouseLeave={() => dispatch(closePopUp())} style={{color: router.asPath === '/services' ? '#fff' : '#999', position: 'relative', paddingRight: '10px'}} className={styles.link}>Services <div className={styles.header_pop_up}><FontAwesomeIcon icon={faAngleDown} /></div></div></Link>
                    <Link href="portfolio"><div style={{color: router.asPath === '/portfolio' || router.asPath === '/single-portfolio' ? '#fff' : '#999'}} className={styles.link}>Portfolio</div></Link>
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