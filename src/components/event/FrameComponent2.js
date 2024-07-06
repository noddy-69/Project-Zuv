import TopicOneNames from "./TopicOneNames";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.eventInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.april}>
          <h1 className={styles.whatTopicsWill}>
            What Topics Will Be Addressed
          </h1>
          <div className={styles.inThisEraOfDigitalAdvance}>
            <div className={styles.topicOneNamesParent}>
              <TopicOneNames
                innerTopicOneNames="/frame-1261153540@2x.png"
                kashmiriPanditsAWayOfLife="Kashmiri Pandits – A way of life. Can we preserve it?"
                whatIWantToDiscussHereIsT="What I want to discuss here is the difference between mainland Hindu society and Kashmiri Pandits. Also, the rich cultural and historical heritage. What is being done and what all can be done to not only preserve it digitally/physically but also, how to pass it on to the next generation."
              />
              <TopicOneNames
                innerTopicOneNames="/frame-1261153540-1@2x.png"
                kashmiriPanditsAWayOfLife="Kashmiri Food – How it has changed and how did the exodus multiply the change"
                whatIWantToDiscussHereIsT="Food is integral to any culture and Kashmiri Pandit food was and continues to be unique. But with every culture, there is erosion with time, in our case what impact did exodus have on our food habits and cooking. Have we reclaimed some of it and what can we do to make sure we continue eating and cooking the food of our ancestors."
                propFlex="1"
                propMinWidth="304px"
              />
              <TopicOneNames
                innerTopicOneNames="/frame-1261153540-2@2x.png"
                kashmiriPanditsAWayOfLife="1990! – How were Kashmiri Pandits so blind sighted?"
                whatIWantToDiscussHereIsT="How was life before 1990 in Kashmir. How is it that Kashmiri Pandits could not see what was happening around them that they were caught so off guard. What signs were ignored by the community and what could have been done. How will the community ever reconcile with what happened to them."
                propFlex="1"
                propMinWidth="304px"
              />
            </div>
            <div className={styles.costListParent}>
              <TopicOneNames
                innerTopicOneNames="/frame-1261153540-3@2x.png"
                kashmiriPanditsAWayOfLife="Kashmir of 2024. Is it okay to have hope or has too much water flown in the Vyeth by now?"
                whatIWantToDiscussHereIsT="What happens to Kashmiri Pandits? Why is there no plan for them. Why have successive governments and judiciary and civil society declined any form of closure to the community. Where and what can Kashmiri Pandits do to preserve themselves, surely it cannot happen by being scattered."
                propFlex="unset"
                propMinWidth="unset"
              />
              <TopicOneNames
                innerTopicOneNames="/frame-1261153540-4@2x.png"
                kashmiriPanditsAWayOfLife="Temples of Kashmir!"
                whatIWantToDiscussHereIsT="Kashmir has a rich heritage that has seen degradation over decades, more so after the exodus. Different temples big and small have had different importance in the lives of Kashmiri Pandits, how do we catalogue them historically and what can be done to preserve these. Is the government interested? Who holds the key to the temples in Kashmir"
                propFlex="unset"
                propMinWidth="unset"
              />
              <TopicOneNames
                innerTopicOneNames="/frame-1261153540-5@2x.png"
                kashmiriPanditsAWayOfLife="Travels to Kashmir"
                whatIWantToDiscussHereIsT="Kashmir remained unexplored even in 1990 and remains like that. Kashmiri Pandits by and large would be confined to their own towns and villages. Post 1990, even that came to an end. How can one go about exploring the vastness of Kashmir and by that explore many facets of Kashmiri Pandits and their culture, temples etc in different / remote parts of the valley."
                propFlex="unset"
                propMinWidth="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
