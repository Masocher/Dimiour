// assets
import styles from '../styles/Portfolio.module.css'

// works images
import image_1 from '../../public/images/works/1.jpg'
import image_2 from '../../public/images/works/2.jpg'
import image_3 from '../../public/images/works/3.jpg'
import image_4 from '../../public/images/works/4.jpg'

// tools
import Link from 'next/link'
import { useState } from 'react'

const Portfolio2 = () => {

    let [textStatus1, setTextStatus1] = useState(false)
    let [textStatus2, setTextStatus2] = useState(false)
    let [textStatus3, setTextStatus3] = useState(false)
    let [textStatus4, setTextStatus4] = useState(false)

    return (
        <div>
            <div className={styles.portfolio_container}>
                <div className={styles.portfolio_box}>
                    <div className={styles.columns} style={{margin: '0', flexWrap: 'wrap'}}>
                        <div className={styles.column}>
                            <Link href="/single-portfolio">
                                <div style={{backgroundImage: `url(${image_2.src})`, height: '720px', marginBottom: '30px'}} className={styles.work}>
                                    <div className={styles.black_layer} onMouseEnter={() => setTextStatus1(true)} onMouseLeave={() => setTextStatus1(false)}>
                                        <div style={{bottom: textStatus1 ? '0' : '-30px'}} className={styles.work_title}>
                                            <div className={styles.work_name}>WORK NAME HERE</div>

                                            <div className={styles.work_category}>Category Here</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/single-portfolio">
                                <div style={{backgroundImage: `url(${image_4.src})`, height: '340px'}} className={styles.work}>
                                    <div className={styles.black_layer} onMouseEnter={() => setTextStatus2(true)} onMouseLeave={() => setTextStatus2(false)}>
                                        <div style={{bottom: textStatus2 ? '0' : '-30px'}} className={styles.work_title}>
                                            <div className={styles.work_name}>WORK NAME HERE</div>

                                            <div className={styles.work_category}>Category Here</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.column}>
                            <Link href="/single-portfolio">
                                <div style={{backgroundImage: `url(${image_1.src})`, height: '340px', marginBottom: '30px'}} className={styles.work}>
                                    <div className={styles.black_layer} onMouseEnter={() => setTextStatus3(true)} onMouseLeave={() => setTextStatus3(false)}>
                                        <div style={{bottom: textStatus3 ? '0' : '-30px'}} className={styles.work_title}>
                                            <div className={styles.work_name}>WORK NAME HERE</div>

                                            <div className={styles.work_category}>Category Here</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/single-portfolio">
                                <div style={{backgroundImage: `url(${image_3.src})`, height: '720px'}} className={styles.work}>
                                    <div className={styles.black_layer} onMouseEnter={() => setTextStatus4(true)} onMouseLeave={() => setTextStatus4(false)}>
                                        <div style={{bottom: textStatus4 ? '0' : '-30px'}} className={styles.work_title}>
                                            <div className={styles.work_name}>WORK NAME HERE</div>

                                            <div className={styles.work_category}>Category Here</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.column}>
                            <Link href="/single-portfolio">
                                <div style={{backgroundImage: `url(${image_2.src})`, height: '720px', margin: '30px 0'}} className={styles.work}>
                                    <div className={styles.black_layer} onMouseEnter={() => setTextStatus1(true)} onMouseLeave={() => setTextStatus1(false)}>
                                        <div style={{bottom: textStatus1 ? '0' : '-30px'}} className={styles.work_title}>
                                            <div className={styles.work_name}>WORK NAME HERE</div>

                                            <div className={styles.work_category}>Category Here</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/single-portfolio">
                                <div style={{backgroundImage: `url(${image_4.src})`, height: '340px'}} className={styles.work}>
                                    <div className={styles.black_layer} onMouseEnter={() => setTextStatus2(true)} onMouseLeave={() => setTextStatus2(false)}>
                                        <div style={{bottom: textStatus2 ? '0' : '-30px'}} className={styles.work_title}>
                                            <div className={styles.work_name}>WORK NAME HERE</div>

                                            <div className={styles.work_category}>Category Here</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.column}>
                            <Link href="/single-portfolio">
                                <div style={{backgroundImage: `url(${image_1.src})`, height: '340px', margin: '30px 0'}} className={styles.work}>
                                    <div className={styles.black_layer} onMouseEnter={() => setTextStatus3(true)} onMouseLeave={() => setTextStatus3(false)}>
                                        <div style={{bottom: textStatus3 ? '0' : '-30px'}} className={styles.work_title}>
                                            <div className={styles.work_name}>WORK NAME HERE</div>

                                            <div className={styles.work_category}>Category Here</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/single-portfolio">
                                <div style={{backgroundImage: `url(${image_3.src})`, height: '720px'}} className={styles.work}>
                                    <div className={styles.black_layer} onMouseEnter={() => setTextStatus4(true)} onMouseLeave={() => setTextStatus4(false)}>
                                        <div style={{bottom: textStatus4 ? '0' : '-30px'}} className={styles.work_title}>
                                            <div className={styles.work_name}>WORK NAME HERE</div>

                                            <div className={styles.work_category}>Category Here</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio2