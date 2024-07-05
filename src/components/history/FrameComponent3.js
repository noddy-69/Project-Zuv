import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.photoContainerWrapper, className].join(" ")}>
      <div className={styles.photoContainer}>
        <img
          className={styles.photoLayoutIcon}
          loading="lazy"
          alt=""
          src="/frame-1261156899@2x.png"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.somePhotosOfSiteParent}>
            <h1 className={styles.somePhotosOf}>Some photos of site</h1>
            <div className={styles.photoGrid}>
              <div className={styles.fi54476Parent}>
                <img
                  className={styles.fi54476Icon}
                  loading="lazy"
                  alt=""
                  src="/fi-54476.svg"
                />
                <img
                  className={styles.fi54476Icon1}
                  alt=""
                  src="/fi-54476-1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/frame-1261156900@2x.png"
            />
          </div>
        </div>
        <img
          className={styles.photoLayoutIcon1}
          loading="lazy"
          alt=""
          src="/frame-1261156901@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
