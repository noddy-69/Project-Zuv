import SpeakerAvatars from "./SpeakerAvatars";
import SpeakerTwo from "./SpeakerTwo";
import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={[styles.editionContentWrapper, className].join(" ")}>
      <div className={styles.editionContent}>
        <div className={styles.editionBlock}>
          <div className={styles.editionImage}>
            <img
              className={styles.editionBackgroundIcon}
              loading="lazy"
              alt=""
              src="/rectangle-187784@2x.png"
            />
          </div>
          <div className={styles.editionDetails}>
            <h1 className={styles.editionOne}>Edition One - Project Zuv</h1>
            <div className={styles.editionDescription}>
              <div className={styles.featuring4560Minute}>
                Featuring 45-60 minute one-on-one discussions on Kashmir's past,
                present, and future. These conversations will be digitally
                stored on our website and YouTube channel. This is the first in
                a series of discussions with community members, aiming to
                preserve and share our rich heritage.
              </div>
              <div className={styles.eventDetails}>
                <div className={styles.eventIcons}>
                  <div className={styles.eventIcon}>
                    <img
                      className={styles.calendarIcon}
                      loading="lazy"
                      alt=""
                      src="/calendar.svg"
                    />
                  </div>
                  <div className={styles.thWeekOf}>
                    4th week of July to 1st week of August
                  </div>
                </div>
                <div className={styles.eventIcons1}>
                  <div className={styles.mapPinWrapper}>
                    <img
                      className={styles.mapPinIcon}
                      loading="lazy"
                      alt=""
                      src="/mappin.svg"
                    />
                  </div>
                  <div className={styles.newDelhi}>New Delhi</div>
                </div>
              </div>
              <div className={styles.readMoreParent}>
                <h3 className={styles.readMore}>Read more</h3>
                <div className={styles.chevronRightWrapper}>
                  <img
                    className={styles.chevronRightIcon}
                    alt=""
                    src="/chevronright-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.speakersContentWrapper}>
          <div className={styles.speakersContent}>
            <div className={styles.speakersHeading}>
              <h1 className={styles.guestSpeakers}>Guest Speakers</h1>
            </div>
            <div className={styles.speakerCards}>
              <div className={styles.speakerAvatars}>
                <img
                  className={styles.speakerImageIcon}
                  loading="lazy"
                  alt=""
                  src="/ellipse-5@2x.png"
                />
                <div className={styles.speakerDetails}>
                  <div className={styles.speakerNameProfession}>
                    <div className={styles.speakerName}>
                      <div className={styles.rahulPandita}>Rahul Pandita</div>
                    </div>
                    <div
                      className={styles.authorJournalist}
                    >{`Author & journalist`}</div>
                  </div>
                </div>
              </div>
              <SpeakerAvatars
                ellipse6="/ellipse-6@2x.png"
                adityaRajKaul="Aditya Raj Kaul"
                journalist="Journalist"
              />
              <SpeakerTwo
                speakerTwoAvatar="/ellipse-7@2x.png"
                namrataWakhloo="Namrata Wakhloo"
                authorKashmiriTravelBlogg={`Author & Kashmiri travel blogger`}
              />
            </div>
          </div>
        </div>
        <div className={styles.speakersRowTwo}>
          <div className={styles.speakerCardsTwo}>
            <SpeakerAvatars
              ellipse6="/ellipse-8@2x.png"
              adityaRajKaul=" Avanti Sopory"
              journalist="Author"
            />
            <SpeakerAvatars
              ellipse6="/ellipse-9@2x.png"
              adityaRajKaul="Vinayak Razdan"
              journalist="SearchKashmir"
            />
            <SpeakerTwo
              speakerTwoAvatar="/ellipse-10@2x.png"
              namrataWakhloo="Nalini Moti Sadhu"
              authorKashmiriTravelBlogg="Entrepreneur – Maatamal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
