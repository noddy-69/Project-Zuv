import PropTypes from "prop-types";
import styles from "./RightContent.module.css";

const RightContent = ({ className = "" }) => {
  return (
    <section className={[styles.rightContent, className].join(" ")}>
      <div className={styles.donationAppeal}>
        <h1 className={styles.wantToMake}>Want to make a difference?</h1>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <div className={styles.donationDetails}>
          <div className={styles.partnershipInfo}>
            <div className={styles.withOurDonation}>
              With our donation drive in partnership with Kashmiri NGOs we aim
              to raise money for displaced, ill, and people who are suffering in
              the community. Donate now to play your part in making a
              difference!
            </div>
            <div className={styles.donateButton}>
              <b className={styles.donateNow}>Donate Now</b>
            </div>
          </div>
          <div className={styles.donationImage}>
            <div className={styles.frameParent}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RightContent.propTypes = {
  className: PropTypes.string,
};

export default RightContent;
