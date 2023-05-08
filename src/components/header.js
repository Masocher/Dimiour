// assets
import styles from '../styles/Header.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faAngleDown, faClose } from '@fortawesome/free-solid-svg-icons'

// tools
import Link from 'next/link'
import { useRouter } from 'next/router'

// components
import PopUp from './pop-up'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { openPopUp, closePopUp, openMenu, closeMenu } from '../components/redux/actions'

const Header = () => {

    const router = useRouter()

    const dispatch = useDispatch()

    const menu_status = useSelector(rootReducer => rootReducer.reducer_2)

    return (
        <div className={styles.header} style={{height: menu_status ? '400px' : '30px'}}>
            <PopUp/>
            
            <div className={styles.logo}>DIMIOUR</div>

            <div className={styles.right_content}>
                <div className={styles.links}>
                    <Link href="/"><div style={{color: router.asPath === '/' ? '#fff' : '#999'}} className={styles.link}>Home</div></Link>
                    <Link href="/about-us"><div style={{color: router.asPath === '/about-us' ? '#fff' : '#999'}} className={styles.link}>About</div></Link>
                    <Link href="services"><div onMouseEnter={() => dispatch(openPopUp())} onMouseLeave={() => dispatch(closePopUp())} style={{color: router.asPath === '/services' ? '#fff' : '#999', position: 'relative', paddingRight: '10px', marginBottom: '0'}} className={styles.link}>Services <div className={styles.header_pop_up}><FontAwesomeIcon icon={faAngleDown} /></div></div></Link>
                    <Link href="portfolio"><div style={{color: router.asPath === '/portfolio' || router.asPath === '/single-portfolio' ? '#fff' : '#999'}} className={styles.link}>Portfolio</div></Link>
                    <Link href="contact-us"><div style={{color: router.asPath === '/contact-us' ? '#fff' : '#999'}} className={styles.link}>Contact</div></Link>
                </div>
                
                <div className={styles.search_box}>
                    <div className={styles.search_icon}><FontAwesomeIcon icon={faSearch} /></div>
                    <input className={styles.search_input} type='text' placeholder='Search ...' />
                </div>
            </div>

            {
                menu_status ?
                    <div className={styles.menu_btn} onClick={() => dispatch(closeMenu())}><FontAwesomeIcon icon={faClose} /></div>
                    :
                    <div className={styles.menu_btn} onClick={() => dispatch(openMenu())}><FontAwesomeIcon icon={faBars} /></div>
            }

            <div className={styles.bottom_content} style={{opacity: menu_status ? '1' : '0'}}>
                <Link href="/" onClick={() => dispatch(closeMenu())}><div style={{color: router.asPath === '/' ? '#fff' : '#999'}} className={styles.link}>Home</div></Link>
                <Link href="/about-us" onClick={() => dispatch(closeMenu())}><div style={{color: router.asPath === '/about-us' ? '#fff' : '#999'}} className={styles.link}>About</div></Link>
                <Link href="services" onClick={() => dispatch(closeMenu())}><div style={{color: router.asPath === '/services' ? '#fff' : '#999', position: 'relative', paddingRight: '10px'}} className={styles.link}>Services</div></Link>
                <div className={styles.services}>
                    <div onClick={() => dispatch(closeMenu())} className={styles.service_section}>Branding</div>
                    <div onClick={() => dispatch(closeMenu())} className={styles.service_section}>Web Design</div>
                    <div onClick={() => dispatch(closeMenu())} className={styles.service_section}>App Design</div>
                    <div onClick={() => dispatch(closeMenu())} className={styles.service_section}>Start Up</div>
                </div>
                <Link href="portfolio" onClick={() => dispatch(closeMenu())}><div style={{color: router.asPath === '/portfolio' || router.asPath === '/single-portfolio' ? '#fff' : '#999'}} className={styles.link}>Portfolio</div></Link>
                <Link href="contact-us" onClick={() => dispatch(closeMenu())}><div style={{color: router.asPath === '/contact-us' ? '#fff' : '#999'}} className={styles.link}>Contact</div></Link>

                <div className={styles.search_box}>
                    <div className={styles.search_icon}><FontAwesomeIcon icon={faSearch} /></div>
                    <input className={styles.search_input} type='text' placeholder='Search ...' />
                </div>
            </div>
        </div>
    )
}

export default Header