import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SeasonalFestivals.module.css";

const SeasonalFestivals = ({
  className = "",
  gaadBatta,
  khechriAmavasya,
  propAlignSelf,
}) => {
  const seasonalFestivalsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={[styles.seasonalFestivals, className].join(" ")}
      style={seasonalFestivalsStyle}
    >
      <div className={styles.seasonalFestivalColumns}>
        <div className={styles.seasonalFestivalColumnsInner}>
          <img
            className={styles.frameChild}
            alt=""
            src="/group-1261156898.svg"
          />
        </div>
        <div className={styles.gaadBatta}>{gaadBatta}</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameItem}
            alt=""
            src="/group-1261156898.svg"
          />
        </div>
        <div className={styles.khechriAmavasya}>{khechriAmavasya}</div>
      </div>
    </div>
  );
};

SeasonalFestivals.propTypes = {
  className: PropTypes.string,
  gaadBatta: PropTypes.string,
  khechriAmavasya: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default SeasonalFestivals;
