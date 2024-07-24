import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.aboutUsInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h1 className={styles.kashmiriInstruments}>Kashmiri Instruments</h1>
        <div className={styles.instrumentGallery}>
          <div className={styles.galleryItems}>
            <div className={styles.image9Parent}>
              <img
                className={styles.image9Icon}
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
              
            </div>
            <div className={styles.instrumentDetails}>
              <div className={styles.santoor}>Santoor</div>
              <div className={styles.aHammeredDulcimer}>
                A hammered dulcimer that is central to classical Kashmiri music.
              </div>
            </div>
          </div>
          <div className={styles.galleryItems1}>
            <div className={styles.avatar}>
              
              <img
                className={styles.image10Icon}
                loading="lazy"
                alt=""
                src="/image-10@2x.png"
              />
            </div>
            <div className={styles.rababParent}>
              <div className={styles.rabab}>Rabab</div>
              <div className={styles.aStringInstrument}>
                A string instrument that is used in both folk and classical
                music.
              </div>
            </div>
          </div>
          <div className={styles.galleryItems2}>
            <div className={styles.avatar}>
              <img
                className={styles.galleryItemsChild}
                alt=""
                src="/pot.png"
              />
            </div>
            <div className={styles.noetParent}>
              <div className={styles.noet}>Noet</div>
              <div className={styles.aTypeOf}>
                A type of drum used in folk music.
              </div>
            </div>
          </div>
          <div className={styles.galleryItems3}>
            <div className={styles.rectangleGroup}>
              
              <img
                className={styles.image11Icon}
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
            </div>
            <div className={styles.sarangiParent}>
              <div className={styles.sarangi}>Sarangi</div>
              <div className={styles.aBowedShortNecked}>
                A bowed, short-necked string instrument.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
