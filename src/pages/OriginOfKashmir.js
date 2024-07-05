import PageHeader from "../components/history/PageHeader";
import FrameComponent2 from "../components/history/FrameComponent2";
import FrameComponent1 from "../components/history/FrameComponent1";
import OtherContent from "../components/history/OtherContent";
import styles from "./OriginOfKashmir.module.css";

const OriginOfKashmir = () => {
  return (
    <div className={styles.originOfKashmir}>
   
      <PageHeader
        imgHolder="/img-holder@2x.png"
        originOfKashmir="Origin of Kashmir"
        exploringTheAncientRootsC="Exploring the Ancient Roots, Cultural Evolution, and Historical Significance of the Enchanting Kashmir Valley Through the Ages"
      />
      <section className={styles.originOfKashmirInner}>
        <div className={styles.theHinduLegendParent}>
          <h1 className={styles.theHinduLegend}>The Hindu Legend</h1>
          <div className={styles.legendContent}>
            <img
              className={styles.contentDividerIcon}
              loading="lazy"
              alt=""
              src="/rectangle-187785@2x.png"
            />
            <div
              className={styles.oneOfThe}
            >{`One of the oldest Hindu legends, although mythological, goes something like this. Sage Kashyapa was on a pilgrimage to all the Tirthas (holy sites) of the earth. His son, Nila, went to meet him and convinced him to visit the holy sites of Kashmir. When Kashyapa arrived in Kashmir he was shocked by the ravages in the valley and asked how the devastation was caused. Nila told him about the existence of the water demon Jalodbhava, in the lake of Sati Sara and how he had wreaked havoc in the valley. Kashyapa decided to help by reinstating the land and its inhabitants. He went to seek help from the divinities, and all gods & deities and along with their help, managed to drain the vast lake and defeat the demon.`}</div>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <OtherContent />
      
    </div>
  );
};

export default OriginOfKashmir;
