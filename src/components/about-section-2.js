// assets
import styles from '../styles/About-section.module.css'
import styles2 from '../styles/About-section-2.module.css'

// about image
import image from '../../public/images/other/desk.jpg'

const AboutSection2 = () => {
    return (
        <div className={styles2.container}>
            <div className={styles.left_content}>
                <div className={styles.title_box} style={{letterSpacing: '0'}}><div>CREATIVITY</div> IS OUR PASSION</div>

                <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quos, adipisci aliquid similique saepe ipsa minus maxime alias libero nam quis officia eum impedit. At quisquam reprehenderit cum hic enim?</div>

                <div className={styles.description}>Necessitatibus eligendi molestias similique tempore, optio nobis numquam temporibus debitis cum aspernatur, eius, nihil soluta sapiente enim. Incidunt ipsam praesentium voluptate in pariatur dignissimos, ab corporis minima ea odio asperiores.</div>
            </div>

            <div className={styles2.image_box}></div>
        </div>
    )
}

export default AboutSection2