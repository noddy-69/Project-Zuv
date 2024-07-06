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
            src="/img-holder4@2x.png"
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.headerTitle}>
          <h1 className={styles.originOfKashmir}>About Us</h1>
          <h3 className={styles.exploringTheAncient}>
            In many cultures from this subcontinent, rice is a staple.
            Similarly, since the puranic era rice or “batta” has been an
            important food for the people.
          </h3>
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
