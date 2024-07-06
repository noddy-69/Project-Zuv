import PropTypes from "prop-types";
import styles from "./SeasonalFestivalDetails.module.css";

const SeasonalFestivalDetails = ({ className = "" }) => {
  return (
    <section className={[styles.seasonalFestivalDetails, className].join(" ")}>
      <div className={styles.seasonalFestivalDetailsCont}>
        <div className={styles.seasonalFestivalDetailsTitl}>
          <h1 className={styles.seasonalFestivals}>Seasonal Festivals</h1>
        </div>
        <div className={styles.seasonalFestivalDetailsList}>
          <div className={styles.seasonalFestivalDetailItems}>
            <h1 className={styles.vyathaTruvah}>Vyatha Truvah</h1>
            <div className={styles.vyathVitastaContainer}>
              <p className={styles.vyathVitasta}>
                Vyath – Vitasta the original name of river Jhelum. It is of
                importance to Kashmir and people of Kashmir and origin of
                Kashmir. 
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.vitastaTheRiver}>
                Vitasta, the river Jhelum holds an important place in Kashmir's
                religious and cultural ethos. Most of the famous temples of the
                valley are situated on its banks, noteworthy being Ganesh
                temple, Mahakali shrine, Somayar (the temple of the Moon,)
                Raghunath Mandir, Batayar, Bokhatakeshwar Bhairav etc. Kashmiris
                celebrate the Pradurbhava divas (the appearance day of this life
                line of Kashmir) on the thirteenth day of the bright fortnight
                of Bhadrapada. All the ghats (banks) of this holy river are
                sacred for performing Sandhya (a form of meditation) to offer
                puja. This puja is carried out by offering water, milk
                oblations, vermillion, raw rice and flowers into the flowing
                waters of the river while reciting mantras in praise of the
                mighty river Veth/Vitasta. Annual pilgrimage to its source at
                ‘Vyatha Votur’ and Verinag used to be a must for the KSP in the
                bygone days and even so up to the last exodus of the community
                in the early nineties of the twenty first century 
              </p>
            </div>
          </div>
          <div className={styles.seasonalFestivalDetailItems1}>
            <h1 className={styles.sonthNavreh}>{`Sonth & Navreh`}</h1>
            <div className={styles.sonthIsTheContainer}>
              <p className={styles.sonthIsThe}>
                Sonth is the bearer of Spring. The unique tradition of Thaal
                Bharun is followed on Sonth and Navreh.
              </p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.navrehIsThe}>
                Navreh is the first day of the new year which is celebrated on
                Chaitra maas, shukla pratipadā – or the first day of the bright
                half of the month of Chaitra.
              </p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.thisDayMarks}>
                This day marks the beginning of new year and has a unique custom
                of Thaal Bharun. Thaal means a large dinner plate. The thaal is
                usually made of the Kaansa (bronze) or Silver. It is filled with
                uncooked rice and decorated with items that are important for
                basic survival – this includes a cup of curd, some sugar or
                misri, rock salt or plain salt, handful of cooked rice, bread or
                roti, a mirror, a pen and ink, an item made of silver and gold
                each; usually this is ring you are wearing. It is important to
                keep the neci patr, (Kashmir Almanac) on this day, a picture of
                your deity and marigold flowers, some dry fruits, most
                importantly whole walnuts.
              </p>
              <p className={styles.blankLine3}>&nbsp;</p>
              <p className={styles.theThaalIs}>
                The Thaal is decorated on the eve of Navreh and the custom of
                thaal vuchun, to see the thaal and each item on the thaal
                carefully is at dawn of Navreh.  
              </p>
              <p className={styles.blankLine4}>&nbsp;</p>
              <p className={styles.itIsImportant}>
                It is important to note Walnuts take a special place in this
                Thaal. The Brisingā Samhitā advises the worship of four faced
                Brahmā on this day. It is said that Brahmā created the world on
                this day, thus the importance of the items of basic survival for
                the upcoming year. The Almanac is also of particular importance
                on the thaal because it is referred throughout the year for
                auspicious tithis and vāra.
              </p>
              <p className={styles.blankLine5}>&nbsp;</p>
              <p className={styles.theCustomOf}>
                The custom of Thaal Bharun is followed on Sonth and Navreh, with
                one difference of the new year’s Almanac being kept in the
                Navreh Thaal but not on the Sonth Thaal. Navreh is also
                celebrated with new clothes and fasting because it also is the
                beginning of Chaitra Navratri celebrating the nine forms of
                Goddess Durga. Sonth on the other hand is a much quieter day.
              </p>
            </div>
          </div>
          <div className={styles.seasonalFestivalDetailItems2}>
            <h1 className={styles.herath}>Herath</h1>
            <div className={styles.herathIsOneContainer}>
              <span>
                <p className={styles.herathIsOne}>
                  Herath is one of the most important festivals of Kashmir. It
                  has immense religious and social significance for Kashmir
                  Pandits. Herath, which is Shivrātri is the day of worshiping
                  Shiva and his consort Goddess Parvati. It is celebrated on the
                  trayodaśī or 13th day of the dark half of the month of
                  Phālguna. The rest of Hindus celebrate Shivrātri on chaturdaśī
                  but for Kashmiris the trayodaśī is the night of celebrating
                  Shiva. Chaturdaśī is also an important day in the celebration
                  of Shivrātri – which begins on first day of dark half of the
                  month of Phālguna which comes around February or march. The
                  celebration begins on ‘hury ǒhkdǒh’ with spring cleaning every
                  corner of the house. The festival is called Herath as it is
                  the night of Harā – Shiv  - rath probably coming from rātri,
                  i.e. night.
                </p>
                <p className={styles.p}> </p>
                <p className={styles.thereIsAnotherBeliefOfWhe}>
                  <span>
                    There is another belief of where the names comes from, set
                    in the Islamic invasions on Kashmir. As per some records, an
                    Afghan Sobedar Jabbar Khan ordered Hindus to celebrate the
                    festival in the month of Hara or Āsāda – that is summer in
                    June instead of Phālguna. The subedār believed
                  </span>
                  <i className={styles.faithInThe}>
                    {" "}
                    faith in the sanctity of the Shivaratri festival was to a
                    great extant associated with the snowfall that invariably
                    used to take place during this festival. So one year the
                    festival was moved to June and to his surprise there was a
                    heavy snowfall on the night of Shivrātri in June. This
                    incident humbled the Subedār and left his ment
                    ‘Hairan/Herath’ (Persian word for wonder). As per some
                    observers, this remark led to the name Hareth. Memories of
                    this incident survive in the local tradition in the medium
                    of a saying, “wuch toan ye Jabar janda Hars te korun wanda”
                    (behold the Jabaar rag- man who converted the summer month
                    of June into severe winter).
                  </i>
                </p>
                <p className={styles.p1}> </p>
                <p className={styles.noteText}>
                  (NOTE : TEXT IN ITALICS IS VERBATIM)
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SeasonalFestivalDetails.propTypes = {
  className: PropTypes.string,
};

export default SeasonalFestivalDetails;
