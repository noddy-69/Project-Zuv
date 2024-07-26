import PropTypes from "prop-types";
import styles from "./Content1.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';


const Content1 = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.missionVision}>
        <div className={styles.visionContentWrapper}>
          <div className={styles.visionContent}>
            <div className={styles.ourVisionParent}>
              <h1 className={styles.ourVision}>Our Mission</h1>
              
            </div>
            <div className={styles.zuvIsA}>
              Welcome to Zuv, a project born out of a deep-rooted passion for
              preserving the essence of Kashmir - its culture, its heritage,
              and its soul.  In the heart of every displaced Kashmiri, there
              exists an unyielding desire to reconnect with their roots, to
              grasp onto fragments of their identity that time and distance
              threaten to erode. The name "Zuv" translates to “soul”, “my
              life” or “my beloved” in Kashmiri, a sentiment echoed for
              Kashmir by all her children.  Zuv is a project to preserve,
              document, and remember Kashmir. As displaced Kashmiris, or
              displaced people in general, memory and documentation are our
              only means to make sure we survive. To remember is to exist, and
              to remember, one must first preserve and document. The aim of
              this website is to act as a repository of various aspects of
              Kashmir. To not simply scratch the surface but to dig deeper!
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            300: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 40,
            },
            450: {
              centeredSlides: false,
            },
            0: {
              centeredSlides: true,
            },
          }}
          loop={true}
          
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img
              className={styles.founderPhotoIcon1}
              loading="lazy"
              alt=""
              src="/11.png"
            /></SwiperSlide>
          <SwiperSlide><img
              className={styles.founderPhotoIcon1}
              loading="lazy"
              alt=""
              src="/22.png"
            /></SwiperSlide>
          <SwiperSlide><img
              className={styles.founderPhotoIcon1}
              loading="lazy"
              alt=""
              src="/33.png"
            /></SwiperSlide>
          <SwiperSlide><img
              className={styles.founderPhotoIcon1}
              loading="lazy"
              alt=""
              src="/11.png"
            /></SwiperSlide>
            <SwiperSlide><img
              className={styles.founderPhotoIcon1}
              loading="lazy"
              alt=""
              src="/22.png"
            /></SwiperSlide>
            <SwiperSlide><img
              className={styles.founderPhotoIcon1}
              loading="lazy"
              alt=""
              src="/33.png"
            /></SwiperSlide>
        </Swiper>  
        </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
