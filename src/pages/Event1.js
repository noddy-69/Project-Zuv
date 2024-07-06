import FrameComponent3 from "../components/event/FrameComponent3";
import MainContent from "../components/event/MainContent";
import FrameComponent2 from "../components/event/FrameComponent2";
import FrameComponent from "../components/event/FrameComponent";
import styles from "./Event1.module.css";

const Event1 = () => {
  return (
    <div className={styles.event}>
      <FrameComponent3 />
      <MainContent />
      <FrameComponent2 />
      <FrameComponent />
    </div>
  );
};

export default Event1;
