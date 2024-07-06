import PropTypes from "prop-types";
import styles from "./SpeakerTwo.module.css";

const SpeakerTwo = ({
  className = "",
  speakerTwoAvatar,
  namrataWakhloo,
  authorKashmiriTravelBlogg,
}) => {
  return (
    <div className={[styles.speakerTwo, className].join(" ")}>
      <div className={styles.speakerTwoImage}>
        <img
          className={styles.speakerTwoAvatar}
          loading="lazy"
          alt=""
          src={speakerTwoAvatar}
        />
      </div>
      <div className={styles.speakerTwoDetails}>
        <div className={styles.speakerTwoName}>
          <div className={styles.namrataWakhloo}>{namrataWakhloo}</div>
        </div>
        <div className={styles.authorKashmiri}>{authorKashmiriTravelBlogg}</div>
      </div>
    </div>
  );
};

SpeakerTwo.propTypes = {
  className: PropTypes.string,
  speakerTwoAvatar: PropTypes.string,
  namrataWakhloo: PropTypes.string,
  authorKashmiriTravelBlogg: PropTypes.string,
};

export default SpeakerTwo;
