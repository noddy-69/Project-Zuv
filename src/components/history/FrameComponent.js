import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.wantToMakeADifferenceParent, className].join(" ")}>
      <h1 className={styles.wantToMake}>Want to make a difference?</h1>
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <div className={styles.donationContent}>
        <div className={styles.donationParagraph}>
          <div className={styles.withOurDonation}>
            With our donation drive in partnership with Kashmiri NGOs we aim to
            raise money for displaced, ill, and people who are suffering in the
            community. Donate now to play your part in making a difference!
          </div>
          <div className={styles.donationAction}>
            <b className={styles.donateNow}>Donate Now</b>
          </div>
        </div>
        <div className={styles.donationImage}>
          <div className={styles.imageContainer}>
            <div className={styles.groupWrapper}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </div>
            <img className={styles.groupIcon1} alt="" src="/hand.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
