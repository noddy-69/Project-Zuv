import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.musicInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.ourFounderParent}>
          <h1 className={styles.ourFounder}>Our Founder</h1>
          <div className={styles.founderImage1}>
            <img
              className={styles.founderPhotoIcon1}
              loading="lazy"
              alt=""
              src="/kashvi.png"
            />
          </div>
          <div className={styles.kashviKaulIsContainer}>
            <p className={styles.kashviKaulIsTheVisionaryB}>
              <span className={styles.kashviKaul}>Kashvi Kaul</span>
              <span>
                {" "}
                is the visionary behind Zuv. With deep roots in Kashmir and a
                passion for preserving its rich heritage, she embarked on this
                journey to create a repository that celebrates and safeguards
                Kashmiri culture.
              </span>
            </p>
            <p
              className={styles.kashviKaulHas}
            >{`Kashvi Kaul has spent 2 years working towards the preservation of Kashmiri traditions, collaborating with various cultural organizations, and documenting the stories of the Kashmiri diaspora. `}</p>
            <p className={styles.throughZuvShe}>
              Through Zuv, She aims to bridge the gap between past and present,
              ensuring that future generations can connect with their roots. She
              believes in the power of storytelling and community engagement to
              keep the essence of Kashmir alive.
            </p>
          </div>
        </div>
        <div className={styles.founderImage}>
          <img
            className={styles.founderPhotoIcon}
            loading="lazy"
            alt=""
            src="/kashvi.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
