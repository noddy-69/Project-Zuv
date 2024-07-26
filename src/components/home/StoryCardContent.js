import PropTypes from "prop-types";
import styles from "./StoryCardContent.module.css";

const StoryCardContent = ({ className = "" }) => {
  return (
    <div className={[styles.storyCardContent, className].join(" ")}>
      <div className={styles.storyDescription}>
        <h1 className={styles.loremIpsumDolor}>Edition One - Project Zuv</h1>
        <div className={styles.storyCards}>
          <img
            className={styles.storyCardContent1}
            loading="lazy"
            alt=""
            src="/sun.png"
          />
        </div>
        <div className={styles.loremIpsumDolor1}>
          As a part of Project Zuv, I am hosting an event which would include
          discussions on Kashmir, its culture, and its people. Through these
          discussions I want to open the gates to our past, our present and what
          the future has in store for us. These conversations would be in a
          one-on-one format, lasting 45-60 minutes.
        </div>
      </div>
      <a className={styles.link} href="/event">
      <div className={styles.readMoreLink}>
        <b className={styles.knowMore}>Read More</b>
      </div>
      </a>
    </div>
  );
};

StoryCardContent.propTypes = {
  className: PropTypes.string,
};

export default StoryCardContent;
