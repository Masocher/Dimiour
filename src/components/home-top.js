// assets
import styles from "../styles/Home-top.module.css"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

const HomeTop = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image_box}></div>

            <div className={styles.title_box}>
                WE ARE CREATIVE AGENCY

                <div className={styles.play_btn}><FontAwesomeIcon icon={faPlay} /></div>
                <div className={styles.title_issue}>Watch Video</div>
            </div>
        </div>
    )
}

export default HomeTop