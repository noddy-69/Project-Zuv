import Header from "./Header";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.headerWrapper, className].join(" ")}>
      <Header
        imgHolder="/img-holder@2x.png"
        originOfKashmir="Edition One - Project Zuv"
        exploringTheAncientRootsC="Zuv is a project born out of a passion for preserving the essence of Kashmir - its culture, its heritage, and its soul."
      />
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
