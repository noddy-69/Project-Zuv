import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({
  className = "",
  primetwitter,
  propWidth,
  propOverflowX,
  propAlignSelf,
}) => {
  const footerStyle = useMemo(() => {
    return {
      width: propWidth,
      overflowX: propOverflowX,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propOverflowX, propAlignSelf]);

  return (
    <footer
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <div className={styles.footerContent}>
        <img
          className={styles.projectZuvIcon}
          alt=""
          src="/project-zuv-1.svg"
        />
        <div className={styles.oneImpressio}>© 2024 All rights reserved.</div>
      </div>
      <div className={styles.impressioContainer}>
        <b className={styles.oneImpressio1}>Legal</b>
        <div className={styles.oneImpressio2}>{`Terms & Conditions`}</div>
        <a className={styles.oneImpressio3}>Privacy Policy</a>
        <div className={styles.oneImpressio4}>Cookie Policy</div>
      </div>
      <div className={styles.socialContainer}>
        <b className={styles.oneImpressio5}>Follow Us</b>
        <div className={styles.socialIcons}>
          <img
            className={styles.socialIconsChild}
            loading="lazy"
            alt=""
            src="/group-48533.svg"
          />
          <img
            className={styles.socialIconsItem}
            loading="lazy"
            alt=""
            src="/group-48532.svg"
          />
          <img className={styles.groupIcon} alt="" src="/group-2.svg" />
          <img className={styles.primetwitterIcon} alt="" src="/primetwitter@2x.png" />
        </div>
      </div>
      <div className={styles.contactContainer}>
        <b className={styles.oneImpressio6}>Instagram Feed</b>
        <div className={styles.contactBackgrounds}>
          <img
            className={styles.contactDividersIcon}
            loading="lazy"
            alt=""
            src="/rectangle-187838@2x.png"
          />
          <img
            className={styles.contactDividersIcon1}
            loading="lazy"
            alt=""
            src="/rectangle-187839@2x.png"
          />
          <img
            className={styles.contactDividersIcon2}
            loading="lazy"
            alt=""
            src="/rectangle-187840@2x.png"
          />
          <img
            className={styles.contactDividersIcon3}
            loading="lazy"
            alt=""
            src="/rectangle-187841@2x.png"
          />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  primetwitter: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propOverflowX: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Footer;
