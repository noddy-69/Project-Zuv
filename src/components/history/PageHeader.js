import PropTypes from "prop-types";
import styles from "./PageHeader.module.css";

const PageHeader = ({
  className = "",
  imgHolder,
  originOfKashmir,
  exploringTheAncientRootsC,
}) => {
  return (
    <section className={[styles.pageHeader, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.img}>
          <img
            className={styles.imgHolderIcon}
            loading="lazy"
            alt=""
            src={imgHolder}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.originOfKashmir}>{originOfKashmir}</h1>
          <h3 className={styles.exploringTheAncient}>
            {exploringTheAncientRootsC}
          </h3>
        </div>
      </div>
    </section>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
  imgHolder: PropTypes.string,
  originOfKashmir: PropTypes.string,
  exploringTheAncientRootsC: PropTypes.string,
};

export default PageHeader;
