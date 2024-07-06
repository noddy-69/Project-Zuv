import PropTypes from "prop-types";
import styles from "./SpeakerAvatars.module.css";

const SpeakerAvatars = ({
  className = "",
  ellipse6,
  adityaRajKaul,
  journalist,
}) => {
  return (
    <div className={[styles.speakerAvatars, className].join(" ")}>
      <img
        className={styles.speakerAvatarsChild}
        loading="lazy"
        alt=""
        src={ellipse6}
      />
      <div className={styles.speakerAvatarsInner}>
        <div className={styles.adityaRajKaulParent}>
          <div className={styles.adityaRajKaul}>{adityaRajKaul}</div>
          <div className={styles.journalistWrapper}>
            <div className={styles.journalist}>{journalist}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

SpeakerAvatars.propTypes = {
  className: PropTypes.string,
  ellipse6: PropTypes.string,
  adityaRajKaul: PropTypes.string,
  journalist: PropTypes.string,
};

export default SpeakerAvatars;
