// assets
import styles from "../styles/Single-project.module.css"

// tools
import Link from "next/link"

const SingleProject = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top_content}>
                <div className={styles.left_side}></div>

                <div className={styles.right_side}>
                    <div className={styles.title_box}>Project Details</div>

                    <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum quod et, atque expedita ducimus cumque, voluptatibus, fugit eveniet doloremque veniam impedit qui quibusdam aliquid accusantium beatae quam! Ea, voluptatibus?</div>

                    <div className={styles.description}>Dolore doloribus esse voluptatem illum libero vel, totam velit exercitationem quisquam necessitatibus tempore non quod dolor.</div>

                    <div className={styles.role_box}>
                        <div className={styles.title}>Role:</div>
                        <div className={styles.content}>Design, Front-end, CMS</div>
                    </div>

                    <div className={styles.client_box}>
                        <div className={styles.title}>Client:</div>
                        <div className={styles.content}>XYZ Co.</div>
                    </div>

                    <div className={styles.visit_btn}>VISIT WEBSITE</div>
                </div>
            </div>

            <div className={styles.buttons}>
                <Link href="#" style={{ width: "30%" }}><div className={styles.button}>PERVIOUS PROJECT</div></Link>
                <Link href="#" style={{ width: "30%" }}><div className={styles.button}>ALL PROJECTS</div></Link>
                <Link href="#" style={{ width: "30%" }}><div className={styles.button}>NEXT PROJECT</div></Link>
            </div>
        </div>
    )
}

export default SingleProject