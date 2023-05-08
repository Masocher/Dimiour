// assets
import styles from "../styles/Pop-up.module.css"

// redux
import { useDispatch, useSelector } from "react-redux"
import { openPopUp, closePopUp } from "./redux/actions"

const PopUp = () => {

    const status = useSelector(rootReducer => rootReducer.reducer_1)
    const dispatch = useDispatch()

    return (
        <div className={styles.container} style={{ display: status ? "block" : "none" }} onMouseEnter={() => dispatch(openPopUp())} onMouseLeave={() => dispatch(closePopUp())}>
            <div className={styles.pop_up_box}>
                <div className={styles.link}>Branding</div>
                <div className={styles.link}>Web Design</div>
                <div className={styles.link}>App Design</div>
                <div className={styles.link}>Start Up</div>
            </div>
        </div>
    )
}

export default PopUp