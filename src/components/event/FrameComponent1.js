import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  frame1261156897,
  rahulPandita,
  authorJournalist,
  topic3,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={frame1261156897}
      />
      <div className={styles.rahulPanditaParent}>
        <div className={styles.rahulPandita}>{rahulPandita}</div>
        <div className={styles.authorJournalist}>{authorJournalist}</div>
        <div className={styles.topic3}>{topic3}</div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  frame1261156897: PropTypes.string,
  rahulPandita: PropTypes.string,
  authorJournalist: PropTypes.string,
  topic3: PropTypes.string,
};

export default FrameComponent1;
