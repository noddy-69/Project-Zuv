import SeasonalFestivals from "./SeasonalFestivals";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.festivalsContentWrapper, className].join(" ")}>
      <div className={styles.festivalsContent}>
        <div className={styles.festivalsGrid}>
          <div className={styles.festivalsHeader}>
            <h1 className={styles.kashmiriFestivals}>Kashmiri Festivals</h1>
          </div>
          <div className={styles.accordingToKashmiri}>
            According to Kashmiri historians, Kashmiri Pandit festivals can be
            categorized into:
          </div>
        </div>
        <div className={styles.festivalTypes}>
          <div className={styles.festivalTypeColumns}>
            <div className={styles.festivalTypeRows}>
              <h3 className={styles.socialFestivals}>Social festivals</h3>
            </div>
            <div className={styles.festivalTypeContent}>
              <div className={styles.socialFestivals1}>
                <div className={styles.socialFestivalColumns}>
                  <img
                    className={styles.socialFestivalColumnsChild}
                    alt=""
                    src="/group-1261156898.svg"
                  />
                </div>
                <div className={styles.pann}>Pann</div>
              </div>
              <SeasonalFestivals
                gaadBatta="Gaad-Batta"
                khechriAmavasya="Khechri Amavasya"
              />
              <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group-1261156898.svg"
                  />
                </div>
                <div className={styles.goraTrai}>Gora-Trai</div>
              </div>
            </div>
            <div className={styles.religiousFestivals}>
              <div className={styles.religiousFestivalColumns}>
                <img
                  className={styles.religiousFestivalColumnsChild}
                  alt=""
                  src="/group-1261156898.svg"
                />
              </div>
              <div className={styles.zangtry}>Zangtry</div>
            </div>
          </div>
          <div className={styles.festivalTypeColumns1}>
            <div className={styles.seasonalFestivalsWrapper}>
              <h3 className={styles.seasonalFestivals}>Seasonal festivals</h3>
            </div>
            <SeasonalFestivals
              gaadBatta="Vyatha Truvah"
              khechriAmavasya={`Sonth & Navreh`}
              propAlignSelf="unset"
            />
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/group-1261156898.svg"
                />
              </div>
              <div className={styles.navSheen}>Nav Sheen</div>
            </div>
          </div>
          <div className={styles.festivalTypeColumns2}>
            <div className={styles.religiousFestivalsWrapper}>
              <div className={styles.religiousFestivals1}>
                Religious festivals
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameWrapper1}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/group-1261156898.svg"
                  />
                </div>
                <div className={styles.jeyeshtAshtami}>Jeyesht Ashtami</div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper2}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-1261156898.svg"
                  />
                </div>
                <div className={styles.shravanaPunim}>Shravana Punim</div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.frameWrapper3}>
                  <img
                    className={styles.frameChild1}
                    alt=""
                    src="/group-1261156898.svg"
                  />
                </div>
                <div className={styles.zarmaSatam}>Zarma Satam</div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frameWrapper4}>
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/group-1261156898.svg"
                  />
                </div>
                <div className={styles.kawPunim}>Kaw Punim</div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.frameWrapper5}>
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="/group-1261156898.svg"
                />
              </div>
              <div className={styles.herathShivratri}>Herath (Shivratri)</div>
            </div>
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
