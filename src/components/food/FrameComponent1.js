import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  kANNGUCCH,
  popularlyKnownAsMorelMush,
  storiesHaveComeUpAboutHow,
  inKashmiriCookingTheyAreD,
  rectangle187794,
  rectangle1877941,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.kanngucchParent}>
        <h1 className={styles.kanngucch}>{kANNGUCCH}</h1>
        <img className={styles.frameChild1} alt="" src={rectangle1877941} />
        <div className={styles.popularlyKnownAsContainer}>
          <p className={styles.popularlyKnownAs}>{popularlyKnownAsMorelMush}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.storiesHaveCome}>{storiesHaveComeUpAboutHow}</p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.inKashmiriCooking}>
            {inKashmiriCookingTheyAreD}
          </p>
        </div>
      </div>
      <img className={styles.frameChild} alt="" src={rectangle187794} />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  kANNGUCCH: PropTypes.string,
  popularlyKnownAsMorelMush: PropTypes.string,
  storiesHaveComeUpAboutHow: PropTypes.string,
  inKashmiriCookingTheyAreD: PropTypes.string,
  rectangle187794: PropTypes.string,
  rectangle1877941: PropTypes.string,
};

export default FrameComponent1;
