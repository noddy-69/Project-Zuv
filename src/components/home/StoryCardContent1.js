import PropTypes from "prop-types";
import styles from "./StoryCardContent1.module.css";

const StoryCardContent1 = ({ className = "" }) => {
  return (
    <div className={[styles.storyCardContent, className].join(" ")}>
      <div className={styles.storyDescription}>
        <h1 className={styles.loremIpsumDolor}>
          Play your Part and Donate Now!
        </h1>
        <div className={styles.rectangleParent}>
          <img
            className={styles.storyCardContent}
            alt=""
            src="/donation.png"
          />
          <div className={styles.text} />
        </div>
        <div className={styles.loremIpsumDolor1}>
          34 years since the migration, many Kashmiris have settled within their
          new lives in areas far away from home. However, not everyone in the
          community has been as fortunate as some. Many Kashmiris still lament
          in refugee camps with poor living conditions, no educational
          opportunities, and a lack of basic amenities. With our donation drive
          in partnership with Kashmiri NGOs we aim to raise money for displaced,
          ill, and people who are suffering in the community.
        </div>
      </div>
      <div className={styles.readMoreLink}>
        <b className={styles.knowMore}>Read More</b>
      </div>
    </div>
  );
};

StoryCardContent1.propTypes = {
  className: PropTypes.string,
};

export default StoryCardContent1;
