import StoryCardContent from "./StoryCardContent";
import StoryCardContent1 from "./StoryCardContent1";
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
              src="/sun.png"
            />
            <StoryCardContent />
          </div>
          <div className={styles.storyCards1}>
            <StoryCardContent1 />
            <div className={styles.rectangleParent}>
              <img
                className={styles.storyCardContent}
                alt=""
                src="/donation.png"
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
