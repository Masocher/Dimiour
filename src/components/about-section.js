// assets
import styles from '../styles/About-section.module.css'

const AboutSection = () => {
    return (
        <div className={styles.about_section}>
            <div className={styles.left_content}>
                <div className={styles.title_issue}>WHO WE ARE</div>

                <div className={styles.black_box}></div>

                <div className={styles.title_box}>WE ARE <div>DESIGN AGENCY</div> THAT BRING YOUR IDEAS ALIVE</div>

                <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem temporibus blanditiis accusamus perferendis libero accusantium nisi itaque tempore, harum aliquid aut, sapiente dolor tenetur. Tempora corrupti suscipit delectus perspiciatis!</div>

                <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus.</div>

                <div className={styles.learn_more_btn}>LEARN MORE</div>
            </div>

            <div className={styles.image_box}></div>
        </div>
    )
}

export default AboutSection