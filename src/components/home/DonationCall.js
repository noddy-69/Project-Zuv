import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import styles from "./DonationCall.module.css";

const DonationCall = ({ className = "" }) => {
  return (
    <section className={[styles.donationCall, className].join(" ")}>
      <FrameComponent5
        group="/group.svg"
        propAlignSelf="unset"
        propWidth="1020px"
      />
    </section>
  );
};

DonationCall.propTypes = {
  className: PropTypes.string,
};

export default DonationCall;
