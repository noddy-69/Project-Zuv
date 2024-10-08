import PropTypes from "prop-types";
import styles from "./MainContent1.module.css";

const MainContent1 = ({ className = "" }) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.contentBlockParent}>
        <div className={styles.contentBlock}>
          <div className={styles.contentItem}>
            <div className={styles.new}>
            <a href="https://www.youtube.com/watch?v=YKSAsDjK_S0" target="blank">
              <img
                className={styles.contentPlaceholderIcon1}
                loading="lazy"
                alt=""
                src="/image 2.png"
              />
              </a>
            </div>
            <div className={styles.loremIpsumDolor}>
            Welcome to Zuv, a project dedicated to preserving the essence of Kashmir—its culture, heritage, and soul. In the heart of every displaced Kashmiri, lies an unyielding desire to reconnect with their roots— echoing that sentiment "Zuv," meaning "soul" or "my beloved," embodies their deep connection to their homeland. Zuv aims to document and amplify Kashmir's often overlooked culture, heritage, and history, creating a space for Kashmiris worldwide to reconnect with their roots.
            </div>
            <a className={styles.link} href="/about-us">
            <div className={styles.readMoreLink}>
              <b className={styles.knowMore}>About Us</b>
            </div>
            </a>
          </div>
        </div>
        <a href="https://www.youtube.com/watch?v=YKSAsDjK_S0" target="blank">
        <img
          className={styles.contentPlaceholderIcon}
          loading="lazy"
          alt=""
          src="/image 2.png"
        />
        </a>
      </div>
    </section>
  );
};

MainContent1.propTypes = {
  className: PropTypes.string,
};

export default MainContent1;
