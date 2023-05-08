// assets
import styles from "../styles/Footer.module.css"

// tools
import Link from "next/link"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.titles}>
                    <div className={styles.title}>ABOUT DIMIOUR</div>
                    <div className={styles.title}>CONTACT INFO</div>
                    <div className={styles.title}>QUICK LINKS</div>
                </div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        <div className={styles.column_title}>ABOUT DIMIOUR</div>
                        <div className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nihil numquam aspernatur inventore sint eligendi nostrum!</div>
                        <div className={styles.manager}>Manager : <div>Masocher</div></div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.column_title}>CONTACT INFO</div>

                        <div className={styles.contact_information}>
                            <div className={styles.inf_title}>Address:</div>
                            <div className={styles.inf_desc}>34 Street Name, City Name Here, United States</div>
                        </div>

                        <div className={styles.contact_information}>
                            <div className={styles.inf_title}>Telephone:</div>
                            <div className={styles.inf_desc}>+1 242 4942 290</div>
                        </div>

                        <div className={styles.contact_information}>
                            <div className={styles.inf_title}>Email:</div>
                            <div className={styles.inf_desc}>info@yourdomain.com</div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.column_title}>QUICK LINKS</div>

                        <Link href="#">About</Link>

                        <Link href="#">Terms of Use</Link>

                        <Link href="#">Disclaimers</Link>

                        <Link href="#">Contact</Link>
                    </div>
                </div>

                <div className={styles.copyright}>Copyright © 2023 All Rights Reserved | This template is made with <FontAwesomeIcon style={{ color: "#dc3545", margin: "0 5px", fontSize: "18px" }} icon={faHeart} /> by <Link href="https://github.com/Masocher"><div className={styles.creator}>Masocher</div></Link></div>
            </div>
        </div>
    )
}

export default Footer