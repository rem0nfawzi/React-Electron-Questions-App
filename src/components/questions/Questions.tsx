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
    statement: 'كان اسحق له ..... اولاد',
    answers: ['1', '2', '3', '4'],
    rightAnswer: '2',
  },
  {
    id: 1,
    statement: 'كتب موسي النبي .... اسفار من الكتاب المقدس',
    answers: ['3', '4', '5', '6'],
    rightAnswer: '5',
  },
  {
    id: 2,
    statement: 'يعرف الرسول …… برسول الامم',
    answers: ['بطرس', 'يوحنا', 'يعقوب', 'بولس'],
    rightAnswer: 'بولس',
  },
  {
    id: 3,
    statement: 'عدد المزامير في الكتاب المقدس هو ....',
    answers: ['100', '120', '150', '200'],
    rightAnswer: '150',
  },
  {
    id: 4,
    statement: 'في احاد الصوم الكبير الاحد الثالث هو ....',
    answers: ['التجربة', 'الابن الضال', 'السامرية', 'المخلع'],
    rightAnswer: 'الابن الضال',
  },
  {
    id: 5,
    statement: 'كتب بولس الرسول ..... رساله',
    answers: ['10', '12', '14', '16'],
    rightAnswer: '14',
  },
  {
    id: 6,
    statement: 'يا ابتاه اخطات الي السماء و قدامك ولست مستحقا ان ادعي لك .....',
    answers: ['ابن', 'اخ', 'حبيب', 'صديق'],
    rightAnswer: 'ابن',
  },
  {
    id: 10,
    statement: 'زوجة ابونا إبراهيم',
    answers: ['مريم', 'مرثا', 'سارة', 'رفقة'],
    rightAnswer: 'سارة',
  },
  {
    id: 10,
    statement: 'اخواته رموه في البير',
    answers: ['يوسف', 'عيسو', 'موسي', 'إسحاق'],
    rightAnswer: 'يوسف',
  },
  {
    id: 7,
    statement: 'مخترع المصباح الكهربي هو ……',
    answers: ['نيوتن', 'اينشتاين', 'اديسون'],
    rightAnswer: 'اديسون',
  },
  {
    id: 8,
    statement: 'عاصمة مصر هي',
    answers: ['اسكندرية', 'القليوبية', 'القاهرة', 'شبرا'],
    rightAnswer: 'القاهرة',
  },
  {
    id: 9,
    statement: 'له ثلاث عيون و قدم',
    answers: ['التعبان', 'التليفزيون', 'اشارة المرور'],
    rightAnswer: 'اشارة المرور',
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
