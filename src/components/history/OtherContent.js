import GroupComponent from "./GroupComponent";
import GroupComponent1 from "./GroupComponent1";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./OtherContent.module.css";

const OtherContent = ({ className = "" }) => {
  return (
    <section className={[styles.otherContent, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.otherSectionsWrapper}>
            <h1 className={styles.otherSections}>Other Sections</h1>
          </div>
          <div className={styles.frameContainer}>
            <GroupComponent
              linkBackgrounds="/rectangle-187817-1@2x.png"
              originOfTheNameOfKashmir="Origin of the name of Kashmir"
              theMostCommonTaleIsThatKa="The most common tale is that Kashmir or Kasmira is called so because of Sage Kashyap— Kashyap-pur, Kash-yap-mar —"
            />
            <GroupComponent1
              linkBackgrounds="/rectangle-187817-2@2x.png"
              originOfTheNameOfKashmir="Oldest site in Kashmir"
              theMostCommonTaleIsThatKa="The Neolithic site of Burzahom in present day Srinagar, Kashmir, sheds light on the human habitation patterns from the Neolithic to Megalithic period (3000 BCE-1000 BCE)"
            />
          </div>
        </div>
        <FrameComponent />
      </div>
    </section>
  );
};

OtherContent.propTypes = {
  className: PropTypes.string,
};

export default OtherContent;
