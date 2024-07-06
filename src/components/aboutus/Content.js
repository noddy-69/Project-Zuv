import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.missionVision}>
        <div className={styles.missionContentWrapper}>
          <div className={styles.missionContent}>
            <img
              className={styles.missionDividerIcon}
              loading="lazy"
              alt=""
              src="/rectangle-187794-16@2x.png"
            />
            <div className={styles.ourMissionParent}>
              <h1 className={styles.ourMission}>Our Mission</h1>
              <div className={styles.forEveryDisplaced}>
                For every displaced Kashmiri, reconnecting with their roots is
                essential. 'Zuv' means 'soul' or 'beloved,' reflecting our deep
                connection to Kashmir.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.visionContentWrapper}>
          <div className={styles.visionContent}>
            <div className={styles.ourVisionParent}>
              <h1 className={styles.ourVision}>Our Vision</h1>
              <div className={styles.zuvIsA}>
                Zuv is a project to preserve, document, and remember Kashmir. As
                displaced Kashmiris, or displaced people in general, memory and
                documentation are our only means to make sure we survive. To
                remember is to exist, and to remember, one must first preserve
                and document.
              </div>
            </div>
            <img
              className={styles.visionDividerIcon}
              alt=""
              src="/rectangle-187794-18@2x.png"
            />
          </div>
        </div>
        <FrameComponent5 group="/group1.svg" />
        <div className={styles.goalDetails}>
          <div className={styles.goalDescription}>
            <h1 className={styles.ourGoal}>Our Goal</h1>
            <div className={styles.ourGoalIs}>
              Our goal is to create a comprehensive digital archive of Kashmir's
              culture and history. To not simply scratch the surface but to dig
              deeper!
            </div>
          </div>
          <div className={styles.progressBars}>
            <img
              className={styles.progressBarIcon}
              loading="lazy"
              alt=""
              src="/rectangle-187848@2x.png"
            />
            <img
              className={styles.progressBarIcon1}
              loading="lazy"
              alt=""
              src="/rectangle-187847@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
