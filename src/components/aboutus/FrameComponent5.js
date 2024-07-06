import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({
  className = "",
  group,
  propAlignSelf,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={[styles.wantToMakeADifferenceParent, className].join(" ")}
      style={frameDivStyle}
    >
      <h1 className={styles.wantToMake}>Want to make a difference?</h1>
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <div className={styles.donationDetails}>
        <div className={styles.withOurDonationDriveInParParent}>
          <div className={styles.withOurDonation}>
            With our donation drive in partnership with Kashmiri NGOs we aim to
            raise money for displaced, ill, and people who are suffering in the
            community. Donate now to play your part in making a difference!
          </div>
          <div className={styles.donateButton}>
            <b className={styles.donateNow}>Donate Now</b>
          </div>
        </div>
        <div className={styles.goalContentWrapper}>
          <div className={styles.goalContent}>
            <div className={styles.groupWrapper}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src={group}
              />
            </div>
            <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent5;
