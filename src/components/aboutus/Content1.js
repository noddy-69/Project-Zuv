import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import styles from "./Content1.module.css";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Content1 = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.missionVision}>
        <div className={styles.visionContentWrapper}>
          <div className={styles.visionContent}>
            <div className={styles.ourVisionParent}>
              <h1 className={styles.ourVision}>Our Mission</h1>
              
            </div>
            <div className={styles.zuvIsA}>
              Welcome to Zuv, a project born out of a deep-rooted passion for
              preserving the essence of Kashmir - its culture, its heritage,
              and its soul.  In the heart of every displaced Kashmiri, there
              exists an unyielding desire to reconnect with their roots, to
              grasp onto fragments of their identity that time and distance
              threaten to erode. The name "Zuv" translates to “soul”, “my
              life” or “my beloved” in Kashmiri, a sentiment echoed for
              Kashmir by all her children.  Zuv is a project to preserve,
              document, and remember Kashmir. As displaced Kashmiris, or
              displaced people in general, memory and documentation are our
              only means to make sure we survive. To remember is to exist, and
              to remember, one must first preserve and document. The aim of
              this website is to act as a repository of various aspects of
              Kashmir. To not simply scratch the surface but to dig deeper!
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
