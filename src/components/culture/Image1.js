import PropTypes from "prop-types";
import styles from "./Image1.module.css";

const Image1 = ({ className = "", image, ghulamHassanSofi }) => {
  return (
    <div className={[styles.image, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.oval}>
        <div className={styles.ghulamHassanSofi}>{ghulamHassanSofi}</div>
      </div>
    </div>
  );
};

Image1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  ghulamHassanSofi: PropTypes.string,
};

export default Image1;
