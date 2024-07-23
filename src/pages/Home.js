import MainContent1 from "../components/home/MainContent1";
import FrameComponent7 from "../components/home/FrameComponent7";
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
            src="/Rectangle 187791.png"
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
          <div className={styles.impactMetrics}>
            <div className={styles.metricItems}>
              <div className={styles.metricValues}>
                <div className={styles.m}>7th Exodus of Kashmiri</div>
                <h3 className={styles.childrenFedYearly}>
                  Pandits in the Valley
                </h3>
              </div>
              <div className={styles.metricValues1}>
                <div className={styles.k}>600,000 displaced?</div>
                <h3 className={styles.sponsoreYearly}>
                  52,000? 100,000? The tragedy is no one has been able to
                  account for the actual number
                </h3>
              </div>
              <div className={styles.metricValues2}>
                <div className={styles.div}>400 people killed?</div>
                <h3 className={styles.countriesSupported}>
                  850? 200? Only 30 FIRs registered for the killings of Kashmiri Pandits in the Valley
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent7 />
      <DonationCall />
    </div>
  );
};

export default Home;
