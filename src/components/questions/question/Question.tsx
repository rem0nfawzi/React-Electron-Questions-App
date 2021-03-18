/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

const Question = ({ question, answers, setAnswers, activeQuestion }) => {
  // const [answers[activeQuestion], setChosen] = useState(null);
  return (
    <div className="question">
      <h2>{question.statement}</h2>
      <ol className="answers">
        {question.answers.map((a) => (
          <li
            key={a}
            onClick={() => {
              setAnswers((prev: any) => {
                const p = [...prev];
                p[activeQuestion] = a;
                return p;
              });
            }}
            className={`${
              answers[activeQuestion] &&
              answers[activeQuestion] === a &&
              answers[activeQuestion] === question.rightAnswer
                ? 'right'
                : ''
            } ${
              answers[activeQuestion] &&
              answers[activeQuestion] === a &&
              answers[activeQuestion] !== question.rightAnswer
                ? 'wrong'
                : ''
            }`}
          >
            {a}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Question;
