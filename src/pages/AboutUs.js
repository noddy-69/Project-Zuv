import PageHeader from "../components/culture/PageHeader";
import Content from "../components/culture/Content";
import FrameComponent1 from "../components/culture/FrameComponent1";
import FrameComponent from "../components/culture/FrameComponent";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <PageHeader />
      <Content />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default AboutUs;
