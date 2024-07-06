import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.guestsWrapperWrapper, className].join(" ")}>
      <div className={styles.guestsWrapper}>
        <h1 className={styles.guestsForEdition}>Guests for Edition One</h1>
        <div className={styles.guestList}>
          <FrameComponent1
            frame1261156897="/frame-1261156897@2x.png"
            rahulPandita="Rahul Pandita"
            authorJournalist={`Author & journalist`}
            topic3="Topic 3"
          />
          <FrameComponent1
            frame1261156897="/frame-1261156897-1@2x.png"
            rahulPandita="Aditya Raj Kaul"
            authorJournalist="Journalist"
            topic3="Topic 4"
          />
          <FrameComponent1
            frame1261156897="/frame-1261156897-2@2x.png"
            rahulPandita="Namrata Wakhloo"
            authorJournalist={`Author & Kashmiri travel blogger`}
            topic3="Topic 6"
          />
          <FrameComponent1
            frame1261156897="/frame-1261156897@2x.png"
            rahulPandita="Avanti Sopory"
            authorJournalist="Author"
            topic3="Topic 5"
          />
          <FrameComponent1
            frame1261156897="/frame-1261156897-1@2x.png"
            rahulPandita="Vinayak Razdan"
            authorJournalist="SearchKashmir"
            topic3="Topic 1"
          />
          <FrameComponent1
            frame1261156897="/frame-1261156897-2@2x.png"
            rahulPandita="Nalini Moti Sadhu"
            authorJournalist="Entrepreneur – Maatamal"
            topic3="Topic 2"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
