import PageHeader from "../components/history/PageHeader";
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
          <div className={styles.legendContent}>
            <div className={styles.heading}>
              <h1 className={styles.theHinduLegend}>The Hindu Legend</h1>
            </div>
            <div className={styles.oneOfThe}>
              One of the oldest Hindu legends, although mythological, goes
              something like this. Sage Kashyapa was on a pilgrimage to all the
              Tirthas (holy sites) of the earth. His son, Nila, went to meet him
              and convinced him to visit the holy sites of Kashmir. When
              Kashyapa arrived in Kashmir he was shocked by the ravages in the
              valley and asked how the devastation was caused. Nila told him
              about the existence of the water demon Jalodbhava, in the lake of
              Sati Sara and how he had wreaked havoc in the valley. Kashyapa
              decided to help by reinstating the land and its inhabitants. He
              went to seek help from the divinities, and all gods & deities and
              along with their help, managed to drain the vast lake and defeat
              the demon.
            </div>
          </div>
          <div className={styles.legendContent}>
            <div className={styles.heading}>
              <h1 className={styles.theHinduLegend}>
                Legends from other cultures
              </h1>
            </div>
            <div className={styles.oneOfThe}>
              <p>
                In the later eras when travelers and scholars like Hiuen tsang,
                Bedia ud- din, Forster etc visited the valley and got acquainted
                with the existing legends, they were so convinced by the
                elements in the story, that they in turn compiled similar
                versions to suit their audiences.
              </p>
              <p>
                Hiuen Tsang in the Buddhist version writes: “This country was
                once a dragon lake instead of Sati Sara.”<br></br>
                Muslim chroniclers have given their own version, in which Bedia
                ud-din begins with the creation and brings Adam from Sarandip
                where all Muslim authorities place him after the fall of
                Cashmere. Another Muslim version of the same story as recorded
                in the Wakiat –I-Kashmir, is almost similar to the version
                recorded in Nilamata. European travelers and chroniclers have
                also put in their version, where Solomon is declared to have
                dried the waters of Kashmir.
              </p>
              Despite the variances, the format of the legend has remained the
              same. It’s not really possible to pinpoint what led to the
              formation of such a legend. In his book Mohini Qasba Raina
              writes:  “Is it the basin-like shape of the valley surrounded by
              high mountains? Or did this phenomenon –draining of the lake
              waters –occur due to some natural activity, which was observed by
              the aboriginal inhabitants of the valley and that has come down
              the ages, through word to mouth. Or is it a distant possibility
              that these inhabitants had the geological conception of the lake
              formation and its desiccation.
            </div>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <OtherContent />
    </div>
  );
};

export default OriginOfKashmir;
