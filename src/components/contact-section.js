// assets
import styles from "../styles/Contact-section.module.css"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const ContactSection = () => {
    return (
        <div className={styles.container}>
            <form className={styles.left_content}>
                <div className={styles.input_box} style={{ width: "47%" }}>
                    <div className={styles.input_title}>Name</div>
                    <input className={styles.message_input} type="text" />
                </div>

                <div className={styles.input_box} style={{ width: "47%" }}>
                    <div className={styles.input_title}>Phone</div>
                    <input className={styles.message_input} type="text" />
                </div>

                <div className={styles.input_box} style={{ width: "100%" }}>
                    <div className={styles.input_title}>Email</div>
                    <input className={styles.message_input} type="email" />
                </div>

                <div className={styles.input_box} style={{ width: "100%" }}>
                    <div className={styles.input_title}>Write Message</div>
                    <textarea className={styles.text_input}></textarea>
                </div>

                <button type="submit" className={styles.send_btn}>SEND MESSAGE</button>
            </form>

            <div className={styles.right_content}>
                <div className={styles.information_box}>
                    <span><FontAwesomeIcon icon={faLocationDot} /></span>
                    <div className={styles.title}>34 Street Name, City Name Here, United States</div>
                </div>

                <div className={styles.information_box}>
                    <span><FontAwesomeIcon icon={faPhone} /></span>
                    <div className={styles.title}>+1 242 4942 290</div>
                </div>

                <div className={styles.information_box}>
                    <span><FontAwesomeIcon icon={faEnvelope} /></span>
                    <div className={styles.title}>info@yourdomain.com</div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection