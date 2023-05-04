// assets
import styles from '../styles/About-section.module.css'
import styles2 from '../styles/Featured-services.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobilePhone, faDesktop, faRocket, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const FeaturedServices = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left_content}>
                <div className={styles.title_issue}>FEATURED SERVICES</div>

                <div className={styles.black_box}></div>

                <div className={styles.title_box}>THE <div>SERVICES</div> THAT WE ARE PROVIDING</div>

                <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem temporibus blanditiis accusamus perferendis libero accusantium nisi itaque tempore, harum aliquid aut, sapiente dolor tenetur. Tempora corrupti suscipit delectus perspiciatis!</div>

                <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus.</div>
            </div>

            <div className={styles2.right_content}>
                <div className={styles2.service_box}>
                    <div className={styles2.icon_box}><FontAwesomeIcon icon={faShieldAlt} /></div>

                    <div className={styles2.title_box}>Branding</div>

                    <div className={styles2.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>

                <div className={styles2.service_box}>
                    <div className={styles2.icon_box}><FontAwesomeIcon icon={faDesktop} /></div>

                    <div className={styles2.title_box}>Web Design</div>

                    <div className={styles2.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>

                <div className={styles2.service_box}>
                    <div className={styles2.icon_box}><FontAwesomeIcon icon={faMobilePhone} /></div>

                    <div className={styles2.title_box}>App Design</div>

                    <div className={styles2.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>

                <div className={styles2.service_box}>
                    <div className={styles2.icon_box}><FontAwesomeIcon icon={faRocket} /></div>

                    <div className={styles2.title_box}>Start Up</div>

                    <div className={styles2.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedServices