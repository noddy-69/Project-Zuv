import MainContent1 from "../components/home/MainContent1";
import FrameComponent7 from "../components/home/FrameComponent7";
import FrameComponent6 from "../components/home/FrameComponent6";
import DonationCall from "../components/home/DonationCall";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.mainHeading} />
      <section className={styles.homeInner}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-187791@2x.png"
          />
          <div className={styles.heroImage} />
          <h1 className={styles.letsPreserveTheContainer}>
            <p className={styles.letsPreserveTheEssenceOfK}>
              <span
                className={styles.letsPreserveThe}
              >{`Lets preserve the `}</span>
              <span className={styles.essenceOfKashmir}>
                essence of Kashmir
              </span>
              <span>,</span>
            </p>
            <p
              className={styles.itsCultureHeritage}
            >{`it’s Culture, Heritage & Soul`}</p>
          </h1>
        </div>
      </section>
      <MainContent1 />
      <section className={styles.impactContentWrapper}>
        <div className={styles.impactContent}>
          <h1 className={styles.measuringOurImpact}>Measuring Our Impact</h1>
          <div className={styles.impactMetrics}>
            <div className={styles.metricItems}>
              <div className={styles.metricValues}>
                <div className={styles.m}>1M+</div>
                <h3 className={styles.childrenFedYearly}>
                  Children fed yearly
                </h3>
              </div>
              <div className={styles.metricValues1}>
                <div className={styles.k}>50K+</div>
                <h3 className={styles.sponsoreYearly}>Sponsore yearly</h3>
              </div>
              <div className={styles.metricValues2}>
                <div className={styles.div}>20+</div>
                <h3 className={styles.countriesSupported}>
                  Countries supported
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent7 />
      <FrameComponent6 />
      <DonationCall />
    </div>
  );
};

export default Home;
