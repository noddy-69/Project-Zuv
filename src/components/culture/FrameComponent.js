import Image1 from "./Image1";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.singersTitleWrapper, className].join(" ")}>
      <div className={styles.singersTitle}>
        <h1 className={styles.profoundKashmiriSingers}>
          Profound Kashmiri Singers and Songwriters
        </h1>
        <div className={styles.image}>
          <Image1
            image="/Ellipse 5.png"
            ghulamHassanSofi="Ghulam Hassan Sofi"
          />
          <Image1
            image="/Ellipse 6.png"
            ghulamHassanSofi="Vijay Kumar Malla"
          />
          <Image1 image="/Ellipse 7.png" ghulamHassanSofi="Shameem Dev" />
          <Image1 image="/Ellipse 9.png" ghulamHassanSofi="Kailash Mehra" />
          <Image1 image="/Ellipse 10.png" ghulamHassanSofi="Raj Begum" />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
