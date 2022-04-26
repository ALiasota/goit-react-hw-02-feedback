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

  countTotalFeedback = () => {
    const estimates = Object.values(this.state);
    return estimates.reduce((total, estimate) => total + estimate, 0);
  };

  render() {
    const feedbacks = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round((this.state.good / total) * 100);

    return (
      <>
        <Section text="Please leave feed back">
          <FeedbackOptions
            feedbacks={feedbacks}
            onLeaveFeedback={this.setEstimate}
          />
        </Section>
        {total > 0 ? (
          <Section text="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
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
