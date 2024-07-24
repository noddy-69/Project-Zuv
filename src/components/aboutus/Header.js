import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({
  className = "",
  imgHolder,
  originOfKashmir,
  propFlex,
  propWidth,
}) => {
  const headerStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div className={[styles.header, className].join(" ")} style={headerStyle}>
      <div className={styles.img}>
        <img
          className={styles.imgHolderIcon}
          loading="lazy"
          alt=""
          src={imgHolder}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.originOfKashmirParent}>
        <h1 className={styles.originOfKashmir}>{originOfKashmir}</h1>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  imgHolder: PropTypes.string,
  originOfKashmir: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Header;
