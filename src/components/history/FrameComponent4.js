import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.oldestSiteInKashmirInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.burzahomWrapper}>
          <h1 className={styles.burzahom}>Burzahom </h1>
        </div>
        <div className={styles.theNilamataPuranaMentionsAParent}>
          <div className={styles.theNilamataPurana}>
            The Nilamata Purana mentions as many as 65 festivals that Kashmiris
            used to celebrate. Kashmiri Pandits rely on the Nech Patr (Kashmiri
            Almanac) to know about the festival days. The Nech Patr is an
            extremely important part of every Kashmiri household. Every house
            has at least one person who becomes an expert in reading the almanac
            because even today, birthdays are celebrated as per the Kashmiri
            calendar.
          </div>
          <div className={styles.rectangleWrapper}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/rectangle-187836@2x.png"
            />
          </div>
          <div className={styles.theNilamataPurana1}>
            The Nilamata Purana mentions as many as 65 festivals that Kashmiris
            used to celebrate. Kashmiri Pandits rely on the Nech Patr (Kashmiri
            Almanac) to know about the festival days. The Nech Patr is an
            extremely important part of every Kashmiri household. Every house
            has at least one person who becomes an expert in reading the almanac
            because even today, birthdays are celebrated as per the Kashmiri
            calendar.
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
