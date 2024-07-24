import PropTypes from "prop-types";
import styles from "./PageHeader.module.css";

const PageHeader = ({ className = "" }) => {
  return (
    <section className={[styles.pageHeader, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.img}>
          <img
            className={styles.imgHolderIcon}
            loading="lazy"
            alt=""
            src="/music.svg"
          />
       
        </div>
        <div className={styles.headerTitle}>
          <h1 className={styles.originOfKashmir}>Music in Kashmir</h1>
        </div>
      </div>
      <div className={styles.aboutZuvWrapper}>
        <h1 className={styles.aboutZuv}>About Zuv</h1>
      </div>
    </section>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
};

export default PageHeader;
