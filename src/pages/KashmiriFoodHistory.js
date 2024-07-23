import FrameComponent from "../components/food/FrameComponent";
import LeftContent from "../components/food/LeftContent";
import RightContent from "../components/food/RightContent";
import styles from "./KashmiriFoodHistory.module.css";

const KashmiriFoodHistory = () => {
  return (
    <div className={styles.kashmiriFoodHistory}>
      <FrameComponent
        imgHolder="/food.svg"
        originOfKashmir="Kashmiri Food History"
        exploringTheAncientRootsC="In many cultures from this subcontinent, rice is a staple. Similarly, since the puranic era rice or “batta” has been an important food for the people."
      />
      <section className={styles.leftContentWrapper}>
        <LeftContent />
      </section>
      <RightContent />
    </div>
  );
};

export default KashmiriFoodHistory;
