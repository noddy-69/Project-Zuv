import PropTypes from "prop-types";
import styles from "./DivChakrastack.module.css";

const DivChakrastack = ({
  className = "",
  rOTH,
  rothIsAFriedSweetBreadTyp,
  rothIsUsedAsAnOfferingDur,
  rectangle187794,
}) => {
  return (
    <div className={[styles.divChakrastack, className].join(" ")}>
      <div className={styles.frontend}>
        <h1 className={styles.roth}>{rOTH}</h1>
        <div className={styles.rothIsAContainer}>
          <p className={styles.rothIsA}>{rothIsAFriedSweetBreadTyp}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.rothIsUsed}>{rothIsUsedAsAnOfferingDur}</p>
        </div>
      </div>
      <img
        className={styles.divChakrastackChild}
        alt=""
        src={rectangle187794}
      />
    </div>
  );
};

DivChakrastack.propTypes = {
  className: PropTypes.string,
  rOTH: PropTypes.string,
  rothIsAFriedSweetBreadTyp: PropTypes.string,
  rothIsUsedAsAnOfferingDur: PropTypes.string,
  rectangle187794: PropTypes.string,
};

export default DivChakrastack;
