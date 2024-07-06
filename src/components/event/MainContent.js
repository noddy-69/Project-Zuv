import PropTypes from "prop-types";
import styles from "./MainContent.module.css";

const MainContent = ({ className = "" }) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.aboutProjectParent}>
          <div className={styles.aboutProject}>
            <div className={styles.aboutTheProjectParent}>
              <h1 className={styles.aboutTheProject}>About the Project</h1>
              <div className={styles.zuvIsA}>
                Zuv is a project born out of a passion for preserving the
                essence of Kashmir - its culture, its heritage, and its soul. 
                In the heart of every displaced Kashmiri, there exists an
                unyielding desire to reconnect with their roots, to grasp onto
                fragments of their identity that time and distance threaten to
                erode
              </div>
            </div>
          </div>
          <img
            className={styles.separatorIcon}
            loading="lazy"
            alt=""
            src="/rectangle-187794-16@2x.png"
          />
        </div>
        <div className={styles.whatIsTheEventParent}>
          <h1 className={styles.whatIsThe}>What is the event?</h1>
          <div className={styles.eventContent}>
            <img
              className={styles.eventSeparatorIcon}
              alt=""
              src="/rectangle-187794-17@2x.png"
            />
            <div className={styles.eventDescription}>
              <div className={styles.asAPart}>
                As a part of Project Zuv, I am hosting an event which would
                include discussions on Kashmir, its culture, and its people.
                Through these discussions I want to open the gates to our past,
                our present and what the future has in store for us. These
                conversations would be in a one-on-one format, lasting 45-60
                minutes.
              </div>
              <div className={styles.iWillHave}>
                I will have these conversations digitally stored on the Project
                Zuv website and our YouTube channel. This is the first series of
                conversations, and I will keep doing more and more of these
                conversations with community members and digitize them. The
                tentative topics of conversation in the Edition One of Project
                Zuv have been included in this invite.
              </div>
              <div className={styles.eventSchedule}>
                <div className={styles.scheduleDetails}>
                  <img
                    className={styles.calendarIcon}
                    loading="lazy"
                    alt=""
                    src="/calendar1.svg"
                  />
                  <div className={styles.thWeekOf}>
                    4th week of July to 1st week of August
                  </div>
                </div>
                <div className={styles.scheduleDetails1}>
                  <img
                    className={styles.mapPinIcon}
                    loading="lazy"
                    alt=""
                    src="/mappin1.svg"
                  />
                  <div className={styles.newDelhi}>New Delhi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
