import PropTypes from "prop-types";
import styles from "./DishItems1.module.css";

const DishItems1 = ({
  className = "",
  email,
  sHEERCHAI,
  noonChaiOrPinkTeaTheTradi,
}) => {
  return (
    <div className={[styles.dishItems, className].join(" ")}>
      <img className={styles.emailIcon} alt="" src={email} />
      <div className={styles.inputFieldrqmlabq}>
        <h1 className={styles.sheerChai}>{sHEERCHAI}</h1>
        <div className={styles.noonChaiOr}>{noonChaiOrPinkTeaTheTradi}</div>
      </div>
    </div>
  );
};

DishItems1.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  sHEERCHAI: PropTypes.string,
  noonChaiOrPinkTeaTheTradi: PropTypes.string,
};

export default DishItems1;
