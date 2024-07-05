import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  linkBackgrounds,
  originOfTheNameOfKashmir,
  theMostCommonTaleIsThatKa,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <img
        className={styles.linkBackgroundsIcon}
        alt=""
        src={linkBackgrounds}
      />
      <div className={styles.linkContainers}>
        <div className={styles.linkContent}>
          <div className={styles.linkTitlesParent}>
            <div className={styles.linkTitles}>
              <h3 className={styles.originOfThe}>{originOfTheNameOfKashmir}</h3>
            </div>
            <div className={styles.theMostCommon}>
              {theMostCommonTaleIsThatKa}
            </div>
          </div>
          <div className={styles.linkButtons}>
            <div className={styles.linkActions}>
              <b className={styles.readMore}>Read more</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  linkBackgrounds: PropTypes.string,
  originOfTheNameOfKashmir: PropTypes.string,
  theMostCommonTaleIsThatKa: PropTypes.string,
};

export default GroupComponent;
