import PropTypes from "prop-types";
import styles from "./FooterCssvnknw.module.css";

const FooterCssvnknw = ({
  className = "",
  dishCards,
  dishCards1,
  rOGANJOSH,
  roganJoshIsATypeOfCurryDi,
  itIsAVeryFittingDishToCon,
  theDishWasOriginallyBroug,
}) => {
  return (
    <div className={[styles.footerCssvnknw, className].join(" ")}>
      <img
        className={styles.dishCardsIcon}
        loading="lazy"
        alt=""
        src={dishCards}
      />
      <div className={styles.georgeChristeas}>
        <h1 className={styles.roganjosh}>{rOGANJOSH}</h1>
        <img
          className={styles.dishCardsIcon1}
          loading="lazy"
          alt=""
          src={dishCards1}
        />
        <div className={styles.roganJoshIsContainer}>
          <p className={styles.roganJoshIs}>{roganJoshIsATypeOfCurryDi}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.itIsA}>{itIsAVeryFittingDishToCon}</p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.theDishWas}>{theDishWasOriginallyBroug}</p>
        </div>
      </div>
    </div>
  );
};

FooterCssvnknw.propTypes = {
  className: PropTypes.string,
  dishCards: PropTypes.string,
  dishCards1: PropTypes.string,
  rOGANJOSH: PropTypes.string,
  roganJoshIsATypeOfCurryDi: PropTypes.string,
  itIsAVeryFittingDishToCon: PropTypes.string,
  theDishWasOriginallyBroug: PropTypes.string,
};

export default FooterCssvnknw;
