import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { useState } from 'react';
import { Layout } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        console.log('No such feedback was found');
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = total => {
    return Math.round((good * 100) / total);
  };

  const keys = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total)}
          />
        )}
      </Section>
    </Layout>
  );
};
