// assets
import styles from "../styles/Our-team.module.css"

const OurTeam = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title_box}>
                <div className={styles.title}>MEET OUR <div>TEAM</div></div>

                <div className={styles.description}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</div>
            </div>

            <div className={styles.persons}>
                <div className={styles.person_box}>
                    <div className={styles.person_image}><div className={styles.image_box}></div></div>

                    <div className={styles.person_information}>
                        <div className={styles.person_name}>Mike Richardson</div>

                        <div className={styles.person_about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae amet.</div>
                    </div>
                </div>

                <div className={styles.person_box}>
                    <div className={styles.person_image}><div className={styles.image_box_2}></div></div>

                    <div className={styles.person_information}>
                        <div className={styles.person_name}>Laura Smith</div>

                        <div className={styles.person_about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae amet.</div>
                    </div>
                </div>

                <div className={styles.person_box}>
                    <div className={styles.person_image}><div className={styles.image_box}></div></div>

                    <div className={styles.person_information}>
                        <div className={styles.person_name}>Mike Richardson</div>

                        <div className={styles.person_about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae amet.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam