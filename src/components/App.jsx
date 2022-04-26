import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setEstimate = estimate => {
    this.setState(prevState => ({ [estimate]: prevState[estimate] + 1 }));
  };

  render() {
    const countFeedback = () => {
      return Object.values(this.state).reduce(
        (total, estimate) => total + estimate,
        0
      );
    };
    const feedbacks = Object.keys(this.state);
    const estimates = Object.values(this.state);
    function countTotalFeedback() {
      return estimates.reduce((total, estimate) => total + estimate, 0);
    }
    const total = countTotalFeedback();
    const positivePercentage = Math.round((estimates[0] / total) * 100);

    return (
      <>
        <Section text="Please leave feed back">
          <FeedbackOptions
            feedbacks={feedbacks}
            onLeaveFeedback={this.setEstimate}
          />
        </Section>
        {countFeedback() ? (
          <Section text="Statistics">
            <Statistics
              good={estimates[0]}
              neutral={estimates[1]}
              bad={estimates[2]}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification text="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
