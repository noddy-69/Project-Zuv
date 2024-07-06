import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.traditionalPerformingArtsOfParent}>
        <h1 className={styles.traditionalPerformingArts}>
          Traditional Performing Arts of Kashmir
        </h1>
        <div className={styles.musicStyles}>
          <div className={styles.musicList}>
            <div className={styles.musicItems}>
              <div className={styles.sufiyanaMousiqui}>Sufiyana Mousiqui</div>
              <div className={styles.thisClassicalMusic}>
                This classical music form has Persian origins and is central to
                Kashmir's musical tradition. It features instruments like the
                Santoor, Sitar, Kashmiri Saaz, and Tabla. Sufiyana Mousiqui
                often includes spiritual and poetic lyrics.
              </div>
            </div>
            <div className={styles.olivialopez}>
              <div className={styles.chakri}>Chakri</div>
              <div className={styles.aPopularForm}>
                A popular form of traditional folk music in Kashmir, Chakri is
                often performed at weddings and other festive occasions. It
                involves storytelling through song, and common instruments
                include the harmonium, rabab, and noet.
              </div>
            </div>
            <div className={styles.bookmark}>
              <div className={styles.rouf}>Rouf</div>
              <div className={styles.thisIsA}>
                This is a traditional dance and music form performed primarily
                by women. It is associated with the harvest season and
                celebrations like Eid. The songs are lyrical and accompanied by
                rhythmic clapping.
              </div>
            </div>
            <div className={styles.indoorPlants}>
              <div className={styles.bhandPather}>Bhand Pather</div>
              <div className={styles.thisIsA1}>
                This is a traditional theater form of Kashmir that combines
                music, dance, and drama. It often includes satirical elements
                and social commentary.
              </div>
            </div>
          </div>
          <img
            className={styles.savedBy}
            loading="lazy"
            alt=""
            src="/rectangle-187785@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
