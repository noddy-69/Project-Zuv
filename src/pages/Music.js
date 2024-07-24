import Layout from "../components/aboutus/Layout";
import Content from "../components/aboutus/Content";
import Content1 from "../components/aboutus/Content1";
import FrameComponent4 from "../components/aboutus/FrameComponent4";
import styles from "./Music.module.css";

const Music = () => {
  return (
    <div className={styles.music}>
      <Layout />
      <Content1 />
      <FrameComponent4 />
      <Content />
    </div>
  );
};

export default Music;
