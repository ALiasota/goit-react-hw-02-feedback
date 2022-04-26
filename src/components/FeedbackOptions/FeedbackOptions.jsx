import styles from './FeedbackOptions.module.css';
import propTypes from 'prop-types';
const FeedbackOptions = ({ feedbacks, onLeaveFeedback }) => {
  return (
    <div>
      {feedbacks.map(estimate => {
        return (
          <button
            className={styles.btn}
            key={estimate}
            type="button"
            onClick={() => onLeaveFeedback(estimate)}
          >
            {estimate}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  feedbacks: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
