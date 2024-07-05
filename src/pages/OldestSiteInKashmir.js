import PageHeader from "../components/history/PageHeader";
import FrameComponent4 from "../components/history/FrameComponent4";
import FrameComponent3 from "../components/history/FrameComponent3";
import styles from "./OldestSiteInKashmir.module.css";

const OldestSiteInKashmir = () => {
  return (
    <div className={styles.oldestSiteInKashmir}>
 
      <PageHeader
        imgHolder="/img-holder1@2x.png"
        originOfKashmir="Oldest Site in Kashmir"
        exploringTheAncientRootsC="The Neolithic site of Burzahom in present day Srinagar, Kashmir, sheds light on the human habitation patterns from the Neolithic to Megalithic period."
      />
      <FrameComponent4 />
      <FrameComponent3 />

      <div className={styles.oldestSiteInKashmirChild} />
    </div>
  );
};

export default OldestSiteInKashmir;
