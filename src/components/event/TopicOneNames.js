import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TopicOneNames.module.css";

const TopicOneNames = ({
  className = "",
  innerTopicOneNames,
  kashmiriPanditsAWayOfLife,
  whatIWantToDiscussHereIsT,
  propFlex,
  propMinWidth,
}) => {
  const topicOneNamesStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={[styles.topicOneNames, className].join(" ")}
      style={topicOneNamesStyle}
    >
      <img
        className={styles.innerTopicOneNames}
        loading="lazy"
        alt=""
        src={innerTopicOneNames}
      />
      <div className={styles.reputation}>
        <div className={styles.kashmiriPandits}>
          {kashmiriPanditsAWayOfLife}
        </div>
        <div className={styles.whatIWant}>{whatIWantToDiscussHereIsT}</div>
      </div>
    </div>
  );
};

TopicOneNames.propTypes = {
  className: PropTypes.string,
  innerTopicOneNames: PropTypes.string,
  kashmiriPanditsAWayOfLife: PropTypes.string,
  whatIWantToDiscussHereIsT: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default TopicOneNames;
