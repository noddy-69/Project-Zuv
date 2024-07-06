import PropTypes from "prop-types";
import styles from "./MainContent1.module.css";

const MainContent1 = ({ className = "" }) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.contentBlockParent}>
        <div className={styles.contentBlock}>
          <div className={styles.contentItem}>
            <h1 className={styles.loremIpsumDolorContainer}>
              <p className={styles.loremIpsum}>Lorem Ipsum</p>
              <p className={styles.dolorSit}>Dolor Sit</p>
            </h1>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={styles.readMoreLink}>
              <div className={styles.readMoreButton}>
                <img
                  className={styles.fi2077502Icon}
                  alt=""
                  src="/fi-2077502.svg"
                />
              </div>
              <b className={styles.knowMore}>Know more</b>
            </div>
          </div>
        </div>
        <img
          className={styles.contentPlaceholderIcon}
          loading="lazy"
          alt=""
          src="/frame-67.svg"
        />
      </div>
    </section>
  );
};

MainContent1.propTypes = {
  className: PropTypes.string,
};

export default MainContent1;
