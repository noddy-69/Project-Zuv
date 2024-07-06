import PropTypes from "prop-types";
import styles from "./PageHeader1.module.css";

const PageHeader1 = ({ className = "" }) => {
  return (
    <section className={[styles.pageHeader, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.img}>
          <img
            className={styles.imgHolderIcon}
            loading="lazy"
            alt=""
            src="/img-holder@2x.png"
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.originOfKashmirParent}>
          <h1 className={styles.originOfKashmirContainer}>
            <p className={styles.kashmiriFestivals}>Kashmiri Festivals</p>
            <p className={styles.andRituals}>and Rituals </p>
          </h1>
          <h3 className={styles.exploringTheAncient}>
            When we no longer are neighbors, what binds us together is the
            memories and our traditions!
          </h3>
        </div>
      </div>
    </section>
  );
};

PageHeader1.propTypes = {
  className: PropTypes.string,
};

export default PageHeader1;
