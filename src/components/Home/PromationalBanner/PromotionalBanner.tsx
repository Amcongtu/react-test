import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import styles from './PromotionalBanner.module.scss';
import bannerImage from '../../../assets/images/baner.png';
import { Pagination } from 'swiper/modules';
import './swiper-custom.scss';


export function PromotionalBanner() {
    return (
        <Swiper slidesPerView={1} spaceBetween={10} modules={[Pagination]} loop={true} pagination={{ clickable: true }}>
            {[1, 2, 3].map((_, idx) => (
                <SwiperSlide key={idx} style={{ backgroundImage: `url(${bannerImage})` }}>
                    <div className={styles.bgImage} ></div>
                    <div className={`${styles.bannerSlide} container`}>
                        <div className={styles.content}>
                            <span className={styles.smallText}>Best Furniture For Your Castle...</span>
                            <h2 className={styles.title}>New Furniture Collection Trends in 2020</h2>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
                                phasellus non in justo.
                            </p>
                            <button className={styles.shopButton}>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
