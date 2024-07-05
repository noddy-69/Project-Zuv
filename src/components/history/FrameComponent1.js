import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.originOfKashmirInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.observationTitle}>
          <h1 className={styles.scientificObservancesAbout}>
            Scientific Observances about the formation of the valley
          </h1>
        </div>
        <div className={styles.geologyContent}>
          <div className={styles.geologistsAgreeThatTheVallWrapper}>
            <div className={styles.geologistsAgreeThatContainer}>
              <p className={styles.geologistsAgreeThat}>
                Geologists agree that the valley was a part of a large sea,
                around 200 to 250 million years ago, and underwent severe
                terrestrial volcanic activity. As a result, mountain ranges that
                surround the valley, retain the core of the volcanic rocks;
                Shankaracharya hill and Hariparbat hill- volcanoes of that
                era-stand as evidence of that terrestrial volcanic activity. 
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.anotherInterestingGeological}>
                Another interesting geological wonder in Kashmir are Karewas (or
                Wuders). Karewas are these flat/table lands originated by the
                draining of the vast lake. These are alluvial deposits of
                different soils and sediments such as clay, silt, shale, sand,
                mud, lignite etc. It is estimated that these Karewas stretch
                across the valley and occupy nearly 2500 square kilometers of
                area. 
              </p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p
                className={styles.theseKarewasAre}
              >{`These Karewas are not only a means to study Kashmir’s geological history, but also the reason why agriculture such as apple trees, almonds, & saffron are able to flourish in Kashmir. However, due to rapid urbanization & illegal extractive land uses, Karewas are dying. `}</p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.hereIsAnInformativeVideoA}>
                <a
                  className={styles.here}
                  href="https://youtu.be/g-pGNUQ3j08?si=emH7mOs-eCaX5lXb"
                  target="_blank"
                >
                  <span>
                    <span className={styles.here1}>Here</span>
                  </span>
                </a>
                <span>{` `}</span>
                <span className={styles.isAnInformative}>
                  is an informative video about Karewas and their current state
                  in Kashmir.
                </span>
              </p>
            </div>
          </div>
          <img
            className={styles.geologyContentChild}
            loading="lazy"
            alt=""
            src="/rectangle-187817@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
