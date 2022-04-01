import propTypes from 'prop-types';
const FeedbackOptions = ({feedbacks, onLeaveFeedback}) => {
    return(
        <div>
            
            {Object.keys(feedbacks).map((estimate) => {
                return(
                    <button
                        key = {estimate}
                        type="button"
                        onClick={()=> onLeaveFeedback(estimate)}
                        >
                        {estimate}
                    </button>
                    )})}
        </div>
    )
}

FeedbackOptions.propTypes = {  
    feedbacks: propTypes.objectOf(propTypes.number).isRequired,
    onLeaveFeedback: propTypes.func.isRequired
  }

export default FeedbackOptions;