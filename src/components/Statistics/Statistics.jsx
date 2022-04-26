import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>good:{good}</p>
      <p>neutral:{neutral}</p>
      <p>bad:{bad}</p>
      <p>Total: {total}</p>
      <p>
        {positivePercentage > 0
          ? `Positive feedback: ${positivePercentage}%`
          : 'No positive feedback'}
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
