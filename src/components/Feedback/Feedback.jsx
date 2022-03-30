import React, {Component} from "react";

class Feedback extends Component {
       
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    
    setEstimate = (estimate) => {
        this.setState(prevState => ({[estimate]: prevState[estimate]+1,}))        
    }

    

    countPositiveFeedbackPercentage = () => {} 

    render() {
        return(
            <div>
                <h2>Please leave feed back</h2>
                <div>
                    {Object.keys(this.state).map((estimate) => {
                        return(
                            <button
                                key = {estimate}
                                type="button"
                                onClick={()=> this.setEstimate(estimate)}
                                >
                                    {estimate}
                                </button>
                        )
                    })}
                </div>
                <h2>Statistics</h2>
                {Object.keys(this.state).map((estimate) => {
                    return(
                        <p 
                        key = {estimate}>{estimate}:{this.state[estimate]}</p>
                    )
                })}
            </div>
        )
        
    }
}

export default Feedback;