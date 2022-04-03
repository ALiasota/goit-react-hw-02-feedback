import React, {Component} from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

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
    const countFeedback = () => { return Object.values(this.state).reduce(
        (total, estimate) => total+estimate, 0
      )};
      
      return(
          <>
            <Section text='Please leave feed back'>
              <FeedbackOptions 
                    feedbacks = {this.state} 
                    onLeaveFeedback={this.setEstimate}/>
            </Section>
            { countFeedback()?
            <Section text='Statistics'>              
              <Statistics feedbacks = {this.state}  />
            </Section>:
            <Notification text='There is no feedback'/>
            } 
            </>
      )
      
  }
}

export default App;