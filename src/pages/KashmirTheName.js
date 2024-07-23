import PageHeader from "../components/history/PageHeader";
import FrameComponent from "../components/history/FrameComponent";
import styles from "./KashmirTheName.module.css";

const KashmirTheName = () => {
  return (
    <div className={styles.kashmirTheName}>
   
      <PageHeader
        imgHolder="/img-holder2@2x.png"
        originOfKashmir="Kashmir - The Name"
        exploringTheAncientRootsC="The Neolithic site of Burzahom in present day Srinagar, Kashmir, sheds light on the human habitation patterns from the Neolithic to Megalithic period."
      />
      <section className={styles.innerContentWrapper}>
        <div className={styles.innerContent}>
          <div className={styles.innerContentInner}>
            <div className={styles.whereDidItComeFromParent}>
              <h1 className={styles.whereDidIt}>How Kashmir Got its Name</h1>
              <div className={styles.contacts}>
                <div className={styles.commonTaleParent}>
                  <div className={styles.commonTale}>
                    <div className={styles.theMostCommon}>
                      The most common tale is that Kashmir or Kasmira is called
                      so because of Sage Kashyap— Kashyap-pur, Kash-yap-mar — a
                      country built by Kashyap, and with time it got the name of
                      Kasmira/Kashmir or Kasheer in the native tongue. However,
                      this is not the only explanation.
                    </div>
                    <div className={styles.otherEtymologiesInclude}>
                      Other etymologies include: Kasmira as “ka- water, shmir-
                      to desiccate, Kasmira-land desiccated from water (draining
                      out of water). Or “Ka-water, samara–wind, (Kasmira land
                      from which water has been drained off by wind). Generally
                      in Hindu texts such as Vedas, Puranas, Mahabharata etc it
                      is referred to as Kasmira. There are other names for the
                      valley given by foreign travelers, however.
                    </div>
                  </div>
                  <img
                    className={styles.taleRectIcon}
                    loading="lazy"
                    alt=""
                    src="/name.png"
                  />
                </div>
                <div className={styles.scholarTaleParent}>
                  <div className={styles.scholarTale}>
                    <div className={styles.theChineseTraveler}>
                      The Chinese traveler and famous Buddhist scholar Huien
                      tsang called it , “Kia-shi-milo” while other Chinese
                      accounts refer to it as, “ki-pin” and ache-pin.”
                    </div>
                    <div className={styles.thomasWalterNamed}>
                      Thomas Walter named the valley Ki-(Ka) - Pin, because he
                      gives another dimension to the etymology of word Kashmir,
                      as he relates a Chinese version of extraction of water
                      from the valley after lulling of demon/dragon by a
                      Bodhisattva at the end of which people were afraid to
                      enter the valley and asked each other ‘Ki-pin’ meaning
                      ‘who will enter’ in Chinese language, thus the name given
                      was Ki-pin.
                    </div>
                  </div>
                  <div className={styles.greekInfluence}>
                    <div className={styles.greeksWhoAre}>
                      Greeks who are supposed to have largely influenced art and
                      architecture of Kashmirian style have called Kashmir as,
                      “Kashyaptreras”. Dr. Stein indicates that Herodotus and
                      Alexander called Kashmir as, “Caspapyrus”.
                    </div>
                    <div className={styles.overTheYears}>
                      Over the years Kashmiris have further shortened “Kashmir”
                      to Kashir (Ka-sheer) in their own native tongue.
                    </div>
                    <div className={styles.referencesMohiniQasbaContainer}>
                      <span>{`References: `}</span>
                      <i>mohini qasba raina, and pnk bamzai - vol 1</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent />
        </div>
      </section>
  
    </div>
  );
};

export default KashmirTheName;
