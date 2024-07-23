import PropTypes from "prop-types";
import styles from "./DishItems.module.css";

const DishItems = ({
  className = "",
  rectangle187794,
  rectangle1877941,
  mONJI,
  kohlrabiIsACombinationOfG,
  muchLikeHaakMonjCanAlsoBe,
}) => {
  return (
    <div className={[styles.dishItems, className].join(" ")}>
      <img className={styles.dishItemsChild} alt="" src={rectangle187794} />
      <div className={styles.monjiParent}>
        <h1 className={styles.monji}>{mONJI}</h1>
        <img className={styles.dishItemsChild1} alt="" src={rectangle1877941} />
        <div className={styles.kohlrabiIsAContainer}>
          <p className={styles.kohlrabiIsA}>{kohlrabiIsACombinationOfG}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.muchLikeHaak}>{muchLikeHaakMonjCanAlsoBe}</p>
        </div>
      </div>
    </div>
  );
};

DishItems.propTypes = {
  className: PropTypes.string,
  rectangle187794: PropTypes.string,
  rectangle1877941: PropTypes.string,
  mONJI: PropTypes.string,
  kohlrabiIsACombinationOfG: PropTypes.string,
  muchLikeHaakMonjCanAlsoBe: PropTypes.string,
};

export default DishItems;
