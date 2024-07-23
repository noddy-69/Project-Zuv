import PropTypes from "prop-types";
import styles from "./DishItems1.module.css";

const DishItems1 = ({
  className = "",
  email,
  email1,
  sHEERCHAI,
  noonChaiOrPinkTeaTheTradi,
}) => {
  return (
    <div className={[styles.dishItems, className].join(" ")}>
      <img className={styles.emailIcon} alt="" src={email} />
      <div className={styles.inputFieldrqmlabq}>
        <h1 className={styles.sheerChai}>{sHEERCHAI}</h1>
        <img className={styles.emailIcon1} alt="" src={email1} />
        <div className={styles.noonChaiOr}>{noonChaiOrPinkTeaTheTradi}</div>
      </div>
    </div>
  );
};

DishItems1.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  email1: PropTypes.string,
  sHEERCHAI: PropTypes.string,
  noonChaiOrPinkTeaTheTradi: PropTypes.string,
};

export default DishItems1;
