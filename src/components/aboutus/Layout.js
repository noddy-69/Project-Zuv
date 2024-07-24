import Header from "./Header";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";

const Layout = ({ className = "" }) => {
  return (
    <section className={[styles.layout, className].join(" ")}>
      <div className={styles.header}>
        <Header
          imgHolder="/Rectangle 187791.png"
          originOfKashmir="About Us"
          propFlex="unset"
          propWidth="100%"
        />
      </div>
    </section>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
};

export default Layout;
