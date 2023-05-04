// assets
import styles from '../styles/Testimonials.module.css'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

// testimonials images
import image_1 from '../../public/images/testimonials/1.jpg'
import image_2 from '../../public/images/testimonials/2.jpg'

const Testimonials = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title_box}>TESTIMONIALS</div>

            <Swiper
                spaceBetween={50}
                className={styles.slider}
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    }
                }}
            >
                <SwiperSlide className={styles.slide}>
                    <div className={styles.user_box}>
                        <div className={styles.user_image} style={{backgroundImage: `url(${image_1.src})`}}></div>

                        <div className={styles.user_information}>
                            <div className={styles.user_name}>John Smith</div>
                            <div className={styles.user_about}>XYZ inc. Client</div>
                        </div>
                    </div>

                    <div className={styles.description}>” Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, accusamus? Porro fugit culpa consequuntur dolorum. “</div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                    <div className={styles.user_box}>
                        <div className={styles.user_image} style={{backgroundImage: `url(${image_2.src})`}}></div>

                        <div className={styles.user_information}>
                            <div className={styles.user_name}>John Smith</div>
                            <div className={styles.user_about}>XYZ inc. Client</div>
                        </div>
                    </div>

                    <div className={styles.description}><p>” Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ut enim error molestias maxime deserunt voluptate doloribus nihil nesciunt id perferendis, doloremque earum architecto ab incidunt sunt corrupti. Consequuntur qui ullam voluptates sapiente quod esse eum. “</p></div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                    <div className={styles.user_box}>
                        <div className={styles.user_image} style={{backgroundImage: `url(${image_1.src})`}}></div>

                        <div className={styles.user_information}>
                            <div className={styles.user_name}>John Smith</div>
                            <div className={styles.user_about}>XYZ inc. Client</div>
                        </div>
                    </div>

                    <div className={styles.description}>” Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui, ipsum debitis id reprehenderit ut soluta possimus consectetur asperiores totam veniam quasi molestiae. Animi doloribus accusamus eius ex laudantium vitae? “</div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                    <div className={styles.user_box}>
                        <div className={styles.user_image} style={{backgroundImage: `url(${image_2.src})`}}></div>

                        <div className={styles.user_information}>
                            <div className={styles.user_name}>John Smith</div>
                            <div className={styles.user_about}>XYZ inc. Client</div>
                        </div>
                    </div>

                    <div className={styles.description}>” Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ab? Asperiores dolore blanditiis quis sapiente soluta aliquid officiis. “</div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonials