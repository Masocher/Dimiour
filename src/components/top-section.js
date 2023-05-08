// assets
import styles from "../styles/Top-section.module.css"

// tools
import Link from "next/link"

const TopSection = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.image_box}></div>

            <div className={styles.title_box}>
                <div className={styles.title}>{props.title}</div>
                <div>
                    {
                        props.status ? <div className={styles.issue}><Link href="/">Home</Link> <div>/</div> <Link href="/portfolio">Portfolio</Link> <div>/</div> {props.issue}</div> : <div className={styles.issue}><Link href="/">Home</Link> <div>/</div> {props.issue}</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TopSection