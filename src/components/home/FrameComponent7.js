import StoryCardContent from "./StoryCardContent";
import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={[styles.storiesContentWrapper, className].join(" ")}>
      <div className={styles.storiesContent}>
        <div className={styles.storiesHeading}>
          <h1 className={styles.stories}>Stories</h1>
        </div>
        <div className={styles.storyItems}>
          <div className={styles.storyCards}>
            <img
              className={styles.storyCardContent}
              loading="lazy"
              alt=""
              src="/rectangle-187785@2x.png"
            />
            <StoryCardContent />
          </div>
          <div className={styles.storyCards1}>
            <StoryCardContent />
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-187785@2x.png"
              />
              <div className={styles.text} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
