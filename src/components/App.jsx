import React, {Component} from "react";

class App extends Component {
       
  state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  
  setEstimate = (estimate) => {
      this.setState(prevState => ({[estimate]: prevState[estimate]+1,}));        
  }

  

  

  render() {
      const estimates = Object.values(this.state);
      
      const countTotalFeedback = () => { return estimates.reduce(
          (total, estimate) => total+estimate, 0
      )};
      const countPositiveFeedbackPercentage =Math.round(estimates[0] / countTotalFeedback() * 100);
      
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
              <p>Total: {countTotalFeedback()}</p>
              <p>{estimates[0]?`Positive feedback: ${countPositiveFeedbackPercentage}%`:'No positive feedback'}</p>
          </div>
      )
      
  }
}

export default App;