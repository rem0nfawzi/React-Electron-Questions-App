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
    statement: ' ........... انتصر علي جليات',
    answers: ['يوسف', 'إبراهيم', 'داود', 'آدم'],
    rightAnswer: 'داود',
  },
  {
    id: 1,
    statement: 'صام موسي النبي ...... يوم علي الجبل',
    answers: ['١٠', '٢٠', '٣٠', '٤٠'],
    rightAnswer: '٤٠',
  },
  {
    id: 2,
    statement: 'كتب بولس الرسول ...... رساله',
    answers: ['١٠', '١٢', '١٤', '١٦'],
    rightAnswer: '١٤',
  },
  {
    id: 3,
    statement: '....... هو اول من صام في الكتاب المقدس',
    answers: ['آدم', 'إبراهيم', 'موسي', 'السيد المسيح'],
    rightAnswer: 'موسي',
  },
  {
    id: 4,
    statement: 'الباباشنودة الثالث كان البطرك رقم ....',
    answers: ['١١٥', '١١٦', '١١٧', '١١٨'],
    rightAnswer: '١١٧',
  },
  {
    id: 5,
    statement: 'البابا كيرلس السادس تنيح يوم .... مارس',
    answers: ['٧', '٩', '١٧', '٢١'],
    rightAnswer: '٩',
  },
  {
    id: 6,
    statement: '...... كان من تلاميذ السيد المسيح و لقبه الحبيب',
    answers: ['بطرس', 'يوحنا', 'متي', 'يعقوب'],
    rightAnswer: 'يوحنا',
  },
  {
    id: 7,
    statement:
      'القديس يوحنا المعمدان اكبر في السن من السيد المسيح ب ..... شهور',
    answers: ['٣', '٦', '٩', '١٢'],
    rightAnswer: '٦',
  },
  {
    id: 8,
    statement: 'كان عدد اخوة يوسف .......',
    answers: ['٩', '١٠', '١١', '١٢'],
    rightAnswer: '١١',
  },
  {
    id: 9,
    statement: 'تم صلب السيد المسيح يوم ......',
    answers: ['جمعة', 'سبت', 'أحد', 'إثنين'],
    rightAnswer: 'جمعة',
  },
  {
    id: 10,
    statement: 'قام الملاك ........ ببشارة السيدة العذراء بميلاد السيد المسيح',
    answers: ['ميخائيل', 'جبرائيل', 'روفائيل', 'سوريال'],
    rightAnswer: 'جبرائيل',
  },
  {
    id: 11,
    statement: ' ....... النبي كان في جب الاسود والرب انقذه',
    answers: ['موسي', 'صمؤيل', 'دانيال', 'يونان'],
    rightAnswer: 'دانيال',
  },
  {
    id: 12,
    statement: 'عدد الاشخاص الذين دخلو الفلك ايام الطوفان هو ...…',
    answers: ['٤', '٦', '٨', '١٠'],
    rightAnswer: '٨',
  },
  {
    id: 13,
    statement: '......... و ...... من القديسين تنيحوا فى نفس اليوم',
    answers: [
      'البابا كيرلس السادس ومارمينا العجايبي',
      'البابا شنوده الثالث و ابونا فلتاوس السرياني',
      'مارجرجس و ابو سيفين',
      'ابونا بيشوي كامل و الانبا كاراس',
    ],
    rightAnswer: 'البابا شنوده الثالث و ابونا فلتاوس السرياني',
  },
  {
    id: 14,
    statement: 'تنيح ابونا بيشوى كامل ف يوم .... مارس',
    answers: ['٧', '٩', '١٧', '٢١'],
    rightAnswer: '٢١',
  },
  {
    id: 15,
    statement: 'كان الرب مع ...... فكان رجلا ناجحا',
    answers: ['موسي', 'دانيال', 'يوسف', 'داود'],
    rightAnswer: 'يوسف',
  },
  {
    id: 16,
    statement: ' ..…… هو اول الشهداء',
    answers: ['بطرس', 'يوحنا', 'بولس', 'اسطفانوس'],
    rightAnswer: 'اسطفانوس',
  },
  {
    id: 17,
    statement: 'طلب الرب من يونان النبي ان يذهب الي مدينه ……',
    answers: ['اسرائيل', 'مصر', 'نينوي', 'ترشيش'],
    rightAnswer: 'نينوي',
  },
  {
    id: 18,
    statement: 'كان الاسم الاول لبولس الرسول هو ……',
    answers: ['سمعان', 'شاول', 'يوحنا', 'توما'],
    rightAnswer: 'شاول',
  },
  {
    id: 19,
    statement: 'كان بطرس الرسول يعمل في مهنه ....',
    answers: ['راعي غنم', 'نجار', 'طبيب', 'صياد سمك'],
    rightAnswer: 'صياد سمك',
  },
  {
    id: 20,
    statement: ' ..... النبي قام بقتل اسد و دب',
    answers: ['إيليا', 'داود', 'دانيال', 'يونان'],
    rightAnswer: 'داود',
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
