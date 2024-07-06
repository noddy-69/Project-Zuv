import PropTypes from "prop-types";
import styles from "./StoryCardContent.module.css";

const StoryCardContent = ({ className = "" }) => {
  return (
    <div className={[styles.storyCardContent, className].join(" ")}>
      <div className={styles.storyDescription}>
        <h1 className={styles.loremIpsumDolor}>Lorem ipsum dolor sit amet.</h1>
        <div className={styles.loremIpsumDolor1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Nullam ac urna eu felis dapibus condimentum sit amet a
          augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
          fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit
          mauris egestas quam.
        </div>
      </div>
      <div className={styles.storyLink}>
        <b className={styles.exploreOurFocus}>Explore our focus issues</b>
        <div className={styles.chevronRightWrapper}>
          <img
            className={styles.chevronRightIcon}
            loading="lazy"
            alt=""
            src="/chevronright.svg"
          />
        </div>
      </div>
    </div>
  );
};

StoryCardContent.propTypes = {
  className: PropTypes.string,
};

export default StoryCardContent;
