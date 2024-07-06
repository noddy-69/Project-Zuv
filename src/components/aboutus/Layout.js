import Header from "./Header";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";

const Layout = ({ className = "" }) => {
  return (
    <section className={[styles.layout, className].join(" ")}>
      <div className={styles.header}>
        <Header
          imgHolder="/rectangle-187791@2x.png"
          originOfKashmir="About Us"
          exploringTheAncientRootsC="In many cultures from this subcontinent, rice is a staple. Similarly, since the puranic era rice or “batta” has been an important food for the people."
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
