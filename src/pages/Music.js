import Layout from "../components/aboutus/Layout";
import Content from "../components/aboutus/Content";
import FrameComponent4 from "../components/aboutus/FrameComponent4";
import styles from "./Music.module.css";

const Music = () => {
  return (
    <div className={styles.music}>
      <Layout />
      <Content />
      <FrameComponent4 />
      <section className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-187792@2x.png"
        />
        <div className={styles.plansDivider} />
        <div className={styles.futurePlansWrapper}>
          <h1 className={styles.futurePlans}>Future Plans</h1>
        </div>
        <h3 className={styles.excitingNewsZuv}>
          Exciting news! Zuv will soon have a physical space to further our
          mission. Stay tuned!
        </h3>
      </section>
    </div>
  );
};

export default Music;
