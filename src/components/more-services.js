// assets
import styles from "../styles/More-services.module.css"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpen, faPaperPlane, faFaceLaugh, faCoffee, faCamera, faImage, faFlask, faLightbulb } from "@fortawesome/free-solid-svg-icons"

const MoreServices = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>MORE <div>SERVICES</div></div>

            <div className={styles.services}>
                <div className={styles.service_box}>
                    <div className={styles.service_icon}><FontAwesomeIcon icon={faBookOpen} /></div>
                    <div className={styles.service_title}>Branding</div>
                    <div className={styles.service_description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>

                <div className={styles.service_box}>
                    <div className={styles.service_icon}><FontAwesomeIcon icon={faPaperPlane} /></div>
                    <div className={styles.service_title}>Web Design</div>
                    <div className={styles.service_description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>

                <div className={styles.service_box}>
                    <div className={styles.service_icon}><FontAwesomeIcon icon={faFaceLaugh} /></div>
                    <div className={styles.service_title}>App Design</div>
                    <div className={styles.service_description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>

                <div className={styles.service_box}>
                    <div className={styles.service_icon}><FontAwesomeIcon icon={faCoffee} /></div>
                    <div className={styles.service_title}>Start Up</div>
                    <div className={styles.service_description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>

                <div className={styles.service_box}>
                    <div className={styles.service_icon}><FontAwesomeIcon icon={faCamera} /></div>
                    <div className={styles.service_title}>Branding</div>
                    <div className={styles.service_description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>

                <div className={styles.service_box}>
                    <div className={styles.service_icon}><FontAwesomeIcon icon={faImage} /></div>
                    <div className={styles.service_title}>Web Design</div>
                    <div className={styles.service_description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>

                <div className={styles.service_box}>
                    <div className={styles.service_icon}><FontAwesomeIcon icon={faFlask} /></div>
                    <div className={styles.service_title}>App Design</div>
                    <div className={styles.service_description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>

                <div className={styles.service_box}>
                    <div className={styles.service_icon}><FontAwesomeIcon icon={faLightbulb} /></div>
                    <div className={styles.service_title}>Start Up</div>
                    <div className={styles.service_description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</div>
                </div>
            </div>
        </div>
    )
}

export default MoreServices