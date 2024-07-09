import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";
import { Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmblaCarousel from './EmblaCarousel'
import './base.css'
import './embla.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.photoContainerWrapper, className].join(" ")}>
      <div className={styles.photoContainer}>
        
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
        
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
