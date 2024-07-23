import PropTypes from "prop-types";
import styles from "./LeftContent.module.css";

const LeftContent = ({ className = "" }) => {
  return (
    <div className={[styles.leftContent, className].join(" ")}>
      <div className={styles.contentParagraph}>
        <div className={styles.riceCulture}>
          <div className={styles.inManyCultures}>
            In many cultures from this subcontinent, rice is a staple.
            Similarly, since the puranic era rice or “batta” has been an
            important food for the people. As per the Nilamata Purana rice was
            cooked in various forms such as simply boiled or converted into
            sweet porridge with milk. Any scarcity of rice would create a famine
            like situation, which emphasizes the importance of the rice for the
            Kashmiri people.
          </div>
          <img
            className={styles.contentRectIcon}
            loading="lazy"
            alt=""
            src="/rectangle-187836@2x2.png"
          />
        </div>
        <div className={styles.inThePuranaThereArentConParent}>
          <div className={styles.inThePurana}>
            In the Purana there aren’t concrete references to the names of
            dishes we cook and eat today. However, there are mentions of
            ingredients that are similar to or are foods from where modern day
            dishes have come from. The terms used for consumables in the
            Nilamata Purana are Saysa (all rice and pulses) and Saka (all green
            vegetables). Besides these, there are also references to spices,
            fruits, roots, sweetmeats, and medicinal herbs. The term “Haak-Saag”
            , a dish loved by all Kashmiris is also probably derived from the
            word Saka, the name for all green vegetables.
          </div>
          <div className={styles.someItemsMentioned}>
            Some items mentioned in the Purana are in consumption even at
            present such as payasa (Rice and milk pudding) and utpalasaka
            (upalhak, or vopal haak). Vopal Haak is a wild herb that is used
            both in Kashmiri cuisine as well as Kashmiri pandit ceremonies and
            rituals. 
          </div>
        </div>
        <div className={styles.fruitsMention}>
          <div className={styles.sinceKashmirWas}>
            Since Kashmir was also rich in fruits like apples, plums, grapes,
            apricots, and peaches— people regularly consumed them. Drinking of
            wines was also a common practice and was even advised on certain
            ceremonial occasions festivals as mentioned in the Nilamata Purana.
            Rice and pulses were cooked together to prepare Khicchari (Khichdi),
            and is cooked on occasions such as Kyechmaavas even today.
          </div>
          <div className={styles.inLaterEras}>
            In later eras there are mentions of onion and garlic, however these
            condiments are more common in Kashmiri Muslim cuisine, and not
            prevalent in the cuisine of Kashmiri pandits.
          </div>
          <div className={styles.inFoodsMentionedContainer}>
            <p className={styles.inFoodsMentioned}>
              In foods mentioned in the Purana, milk and milk preparations like,
              Ksira (kheer), Dadhi, (curd,) and Ghrata (ghee) were common.
              Maksika (honey) and Sarkara (sugar) were used to sweeten the food.
              The spices used were black pepper, ginger and asafoetida and salt
              was very scarce and hence was used by the rich and the nobles
              only. 
            </p>
            <p
              className={styles.meatHasAlso}
            >{`Meat has also been a part of the diet of Kashmiris since the 6th & 7th century AD when the Nilamata Purana was composed. Unlike many parts of India, Kashmiri Pandits have no restrictions on meat and consume it freely. Some Kashmiri Pandits are not meat eaters, but most were. Kashmir is a cold, snowy, icy place and there is not much vegetation that can be found in the cold winter months— even then this was the case. So with the lack of vegetables, our ancestors only had easy access to foal, fish, and other animals as their food.`}</p>
          </div>
        </div>
        <div className={styles.theIslamicEraInKashmirIntParent}>
          <div className={styles.theIslamicEra}>
            The Islamic era in Kashmir introduced Iranian, Afghan and central
            Asian variety of dishes in the Kashmiri cuisine. This menu can be
            commonly defined as waazwan. It differs greatly from the Kashmiri
            Pandit style of cooking and is supposed to be a combination of 36
            courses, although it is usually 20 in normal practice. This waazwan
            is cooked by a professional chef called a Waaza.
          </div>
          <div className={styles.someCommonWaazwan}>
            Some common Waazwan dishes are ab-gosht (mutton cooked in milk).
            gushtaba ( fine succulent mince mutton balls simmered in curd),
            methimaaz (mutton and fenugreek green), kabaab, tabak-maaz, (baked
            chunks of ribs marinated in spice ghee and milk), rista (spicy,
            chilli version of gushtaba), martswaangan-korma (chicken cooked in
            the extract of the red cockscomb flower), daniwal korma (yellow
            chicken cooked in curd), roganjosh and some variety of vegetables .
          </div>
        </div>
        <div className={styles.theBattaKashmiri}>
          The Batta (Kashmiri pandit) prefers their own variety of curd meat
          (yakhni), mutcch (meatballs), kalia (yellow meat ) and kabargah
          (similar to tabakmaaz— fatty ribs boiled and cooked in milk and spice
          till tender and then dipped in curd marinate, and fried in pure ghee).
          The vegetarian choices include are damaloo (slowcooked potatoes),
          chaaman kaliya (yellow cottage cheese), nadur yekhni (lotus stem
          cooked in curd) etc.
        </div>
      </div>
    </div>
  );
};

LeftContent.propTypes = {
  className: PropTypes.string,
};

export default LeftContent;
