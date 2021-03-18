/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Bravo from '../bravo/Bravo';
import Question from './question/Question';

const questions = [
  {
    id: 0,
    statement: 'السؤال الاول  ',
    answers: ['إجابة ١', 'إجابة ٢', 'إجابة ٣', 'إجابة ٤'],
    rightAnswer: 'إجابة ٣',
  },
  {
    id: 1,
    statement: 'السؤال الثاني  ',
    answers: ['إجابة ١', 'إجابة ٢', 'إجابة ٣', 'إجابة ٤'],
    rightAnswer: 'إجابة ٣',
  },
];
const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleNext = () => {
    if (
      answers[activeQuestion] &&
      answers[activeQuestion] === questions[activeQuestion].rightAnswer
    )
      setActiveQuestion((prev) => prev + 1);
  };

  return (
    <div
      className={`questions ${
        activeQuestion >= questions.length ? 'bravo' : ''
      }`}
    >
      {activeQuestion < questions.length ? (
        <Question
          question={questions[activeQuestion]}
          key={questions[activeQuestion].id}
          setAnswers={setAnswers}
          activeQuestion={activeQuestion}
          answers={answers}
        />
      ) : (
        <Bravo />
      )}
      {activeQuestion < questions.length && (
        <button
          className={`action-btn ${
            !answers[activeQuestion] ||
            answers[activeQuestion] !== questions[activeQuestion].rightAnswer
              ? 'disable'
              : ''
          }`}
          onClick={handleNext}
          disabled={
            !answers[activeQuestion] ||
            answers[activeQuestion] !== questions[activeQuestion].rightAnswer
          }
        >
          التالي
        </button>
      )}
      {activeQuestion > 0 && activeQuestion < questions.length && (
        <button
          className="action-btn"
          onClick={() => setActiveQuestion((prev) => prev - 1)}
        >
          السابق
        </button>
      )}
      <Link to="/" className="home">
        الرئسية
      </Link>
    </div>
  );
};

export default Questions;
