import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.cultureContentWrapper, className].join(" ")}>
      <div className={styles.cultureContent}>
        <h1 className={styles.legendsFromOther}>Legends from other cultures</h1>
        <div className={styles.cultureParagraph}>
          <div className={styles.inTheLaterErasWhenTraveleParent}>
            <div className={styles.inTheLaterContainer}>
              <p className={styles.inTheLater}>
                In the later eras when travelers and scholars like Hiuen tsang,
                Bedia ud- din, Forster etc visited the valley and got acquainted
                with the existing legends, they were so convinced by the
                elements in the story, that they in turn compiled similar
                versions to suit their audiences. 
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.hiuenTsangIn}>
                Hiuen Tsang in the Buddhist version writes: “This country was
                once a dragon lake instead of Sati Sara.”
              </p>
              <p className={styles.muslimChroniclersHave}>
                Muslim chroniclers have given their own version, in which Bedia
                ud-din begins with the creation and brings Adam from Sarandip
                where all Muslim authorities place him after the fall of
                Cashmere. Another Muslim version of the same story as recorded
                in the Wakiat –I-Kashmir, is almost similar to the version
                recorded in Nilamata. European travelers and chroniclers have
                also put in their version, where Solomon is declared to have
                dried the waters of Kashmir.
              </p>
            </div>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-187785@2x.png"
            />
          </div>
          <div className={styles.despiteTheVariancesContainer}>
            <p className={styles.despiteTheVariances}>
              Despite the variances, the format of the legend has remained the
              same. It’s not really possible to pinpoint what led to the
              formation of such a legend. In his book Mohini Qasba Raina
              writes: 
            </p>
            <p className={styles.isItThe}>
              “Is it the basin-like shape of the valley surrounded by high
              mountains? Or did this phenomenon –draining of the lake waters
              –occur due to some natural activity, which was observed by the
              aboriginal inhabitants of the valley and that has come down the
              ages, through word to mouth. Or is it a distant possibility that
              these inhabitants had the geological conception of the lake
              formation and its desiccation.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
