import PageHeader1 from "../components/culture/PageHeader1";
import FrameComponent2 from "../components/culture/FrameComponent2";
import SocialFestivalDetails from "../components/culture/SocialFestivalDetails";
import SeasonalFestivalDetails from "../components/culture/SeasonalFestivalDetails";
import styles from "./Festival.module.css";

const Festival = () => {
  return (
    <div className={styles.festival}>
      <PageHeader1 />
      <section className={styles.body}>
        <div className={styles.bodyContent}>
          <div className={styles.theNilamataPuranaContainer}>
            <p className={styles.theNilamataPurana}>
              The Nilamata Purana (nīlamata purāṇa) mentions as many as 65
              festivals that Kashmiris used to celebrate. Kashmiri Pandits rely
              on the Nech Patr (Kashmiri Almanac) to know about the festival
              days. 
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.theNechPatr}>
              The Nech Patr is an extremely important part of every Kashmir
              household. Every Kashmir house has at least one person who becomes
              an expert in reading the almanac, because even today, birthdays
              are celebrated as per the Kashmiri calendar.
            </p>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <SocialFestivalDetails />
      <SeasonalFestivalDetails />
    </div>
  );
};

export default Festival;
