// assets
import styles from '../styles/Portfolio.module.css'

// works images
import image_1 from '../../public/images/works/1.jpg'
import image_2 from '../../public/images/works/2.jpg'
import image_3 from '../../public/images/works/3.jpg'
import image_4 from '../../public/images/works/4.jpg'

// tools
import { useState } from 'react'

const Portfolio = () => {

    let [textStatus1, setTextStatus1] = useState(false)
    let [textStatus2, setTextStatus2] = useState(false)
    let [textStatus3, setTextStatus3] = useState(false)
    let [textStatus4, setTextStatus4] = useState(false)

    return (
        <div className={styles.portfolio_container}>
            <div className={styles.portfolio_box}>
                <div className={styles.title_box}>LATEST WORKS</div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        <div style={{backgroundImage: `url(${image_2.src})`, height: '720px', marginBottom: '30px'}} className={styles.work}>
                            <div className={styles.black_layer} onMouseEnter={() => setTextStatus1(true)} onMouseLeave={() => setTextStatus1(false)}>
                                <div style={{bottom: textStatus1 ? '10px' : '-20px'}} className={styles.work_title}>
                                    <div className={styles.work_name}>WORK NAME HERE</div>

                                    <div className={styles.work_category}>Category Here</div>
                                </div>
                            </div>
                        </div>

                        <div style={{backgroundImage: `url(${image_4.src})`, height: '340px'}} className={styles.work}>
                            <div className={styles.black_layer} onMouseEnter={() => setTextStatus2(true)} onMouseLeave={() => setTextStatus2(false)}>
                                <div style={{bottom: textStatus2 ? '10px' : '-20px'}} className={styles.work_title}>
                                    <div className={styles.work_name}>WORK NAME HERE</div>

                                    <div className={styles.work_category}>Category Here</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div style={{backgroundImage: `url(${image_1.src})`, height: '340px', marginBottom: '30px'}} className={styles.work}>
                            <div className={styles.black_layer} onMouseEnter={() => setTextStatus3(true)} onMouseLeave={() => setTextStatus3(false)}>
                                <div style={{bottom: textStatus3 ? '10px' : '-20px'}} className={styles.work_title}>
                                    <div className={styles.work_name}>WORK NAME HERE</div>

                                    <div className={styles.work_category}>Category Here</div>
                                </div>
                            </div>
                        </div>

                        <div style={{backgroundImage: `url(${image_3.src})`, height: '720px'}} className={styles.work}>
                            <div className={styles.black_layer} onMouseEnter={() => setTextStatus4(true)} onMouseLeave={() => setTextStatus4(false)}>
                                <div style={{bottom: textStatus4 ? '10px' : '-20px'}} className={styles.work_title}>
                                    <div className={styles.work_name}>WORK NAME HERE</div>

                                    <div className={styles.work_category}>Category Here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.more_btn}>MORE PORTFOLIO</div>
            </div>
        </div>
    )
}

export default Portfolio