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
            The Neolithic site of Burzahom in present day Srinagar, Kashmir,
            sheds light on the human habitation patterns from the Neolithic to
            Megalithic period (3000 BCE-1000 BCE).
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
            <p>Burzahom means ‘place of birch’ in Kashmiri. Along with this
            excavations on the site also clue us in on how the birch tree must
            have been common in this area during the Stone Age. The site at
            Burzahom was discovered in 1935 by H. De Terra and T.T. Paterson of
            the Yale-Cambridge expedition.</p>
            There are numerous Neolithic burial
            sites in Burzahom. Discoveries like knitting tools, cotton, and wool
            serve as evidence of Kashmir's rich history of textile trade.
            Artifacts found such as pendants, beads, and terracotta bangles
            indicate ancient Kashmir's trade connections with regions now part
            of present-day Pakistan and China.
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
