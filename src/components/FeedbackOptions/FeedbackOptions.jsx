
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

export default FeedbackOptions;