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
    statement: 'كان مشهور عن البابا كيرلس في شغله انه كان اية ؟',
    answers: ['أمين', 'إجتماعي', 'رغاي'],
    rightAnswer: 'أمين',
  },
  {
    id: 1,
    statement: 'مين هو صديق البابا كيرلس',
    answers: ['ابو سيفين', 'مارمينا', 'مارجرجس'],
    rightAnswer: 'مارمينا',
  },
  {
    id: 2,
    statement: 'اسم الدير اللى اترهبن فيه البابا كيرلس',
    answers: ['السريان', 'البراموس', 'ابو مقار'],
    rightAnswer: 'البراموس',
  },
  {
    id: 3,
    statement: 'الطاحونة موجودة فين ',
    answers: ['الجبل الشرقي', 'الصحراء الغربية', 'الجبل الغربي'],
    rightAnswer: 'الجبل الشرقي',
  },
  {
    id: 4,
    statement: 'العدرا ظهرت فين في عهد البابا كيرلس',
    answers: ['مارمينا وبابا دوبلوا ', 'اسيوط', 'الزيتون'],
    rightAnswer: 'الزيتون',
  },
  {
    id: 5,
    statement: 'البابا كيرلس هو البطريرك رقم كام وهو كيرلس الكام',
    answers: [
      '116 و هو كيرلس الخامس',
      '116 وهو كيرلس السابع',
      '116 وهو كيرلس السادس',
    ],
    rightAnswer: '116 وهو كيرلس السادس',
  },
  {
    id: 6,
    statement:
      'كام مرة البابا كيرلس عمل الميرون وكام مرة عمل البابا شنودة الميرون ',
    answers: [
      '3 مرات والبابا شنودة ',
      'مرة واحده والبابا شنودة 7 ',
      'مرة واحده والبابا شنودة 6',
    ],
    rightAnswer: 'مرة واحده والبابا شنودة 7 ',
  },
  {
    id: 7,
    statement: 'في سنة كام رفات مارمرقس رجعت لمصر ',
    answers: ['1966', '1950', '1968'],
    rightAnswer: '1968',
  },
  {
    id: 8,
    statement: 'ايه من دول كانت اسقفية جديدة  البابا كيرلس اسسها ؟',
    answers: ['الفيوم', 'الخدمات العامة', 'المهجر'],
    rightAnswer: 'الخدمات العامة',
  },
  {
    id: 9,
    statement: 'البابا كيرلس اتنيح يوم ايه ؟',
    answers: ['٨ مارس', '١٧ مارس', '٩ مارس'],
    rightAnswer: '٩ مارس',
  },
  {
    id: 10,
    statement: 'مين هو القديس اللى البابا شنودة جاب رفاتة لمصر',
    answers: ['مارمينا', 'بولس الرسول', 'البابا اثناسيوس'],
    rightAnswer: 'البابا اثناسيوس',
  },
  {
    id: 11,
    statement: 'اية هو اسم البابا شنودة قبل الرهبنة ؟',
    answers: ['روفائيل جيد', 'نظير جيد', 'شوقي جيد'],
    rightAnswer: 'نظير جيد',
  },
  {
    id: 12,
    statement: 'البابا شنودة اتولد يوم اية وفين؟',
    answers: ['٣ اغسطس في المنيا', '٣ اغسطس في دمنهور', '٣ اغسطس في اسيوط'],
    rightAnswer: '٣ اغسطس في اسيوط',
  },
  {
    id: 13,
    statement: 'اترهبن في دير ايه ومين الاسقف اللى رهبنه ؟',
    answers: [
      'اللى رسمه هو  انبا بيشوي كان في  البراموس ',
      'السريان انبا ثاؤفيلس',
      'المحرق انبا ساويرس',
    ],
    rightAnswer: 'السريان انبا ثاؤفيلس',
  },
  {
    id: 14,
    statement: 'كام شهادة دكتوراه حصل عليها البابا شنودة؟',
    answers: ['8', '7', '9'],
    rightAnswer: '9',
  },
  {
    id: 15,
    statement: 'كام اسقف رسمه البابا شنودة؟',
    answers: ['١١٦', '١١٧', '١٠٠'],
    rightAnswer: '١١٧',
  },
  {
    id: 16,
    statement: 'كام كتاب كتبه البابا شنودة؟',
    answers: ['١٤١', '١٣٠', '١٤٠'],
    rightAnswer: '١٤١',
  },
  {
    id: 17,
    statement: 'تاريخ نياحة البابا شنودة؟',
    answers: ['١٧ مارس', '٢٦ مارس', '٨ مارس'],
    rightAnswer: '١٧ مارس',
  },
  {
    id: 18,
    statement: 'ايه اللى حصل لاخو ابونا فلتاؤس لما ابوه اخده من الدير ؟',
    answers: ['سافر السما', 'اتجوز', 'انتحر'],
    rightAnswer: 'سافر السما',
  },
  {
    id: 19,
    statement: 'ابونا فلتاؤس اترهبن في دير اية؟',
    answers: ['انبا بولا', 'انبا بشوي', 'السريان'],
    rightAnswer: 'السريان',
  },
  {
    id: 20,
    statement: 'ابونا فلتاؤس مين من القديسين جاله في القلاية ؟',
    answers: ['العدرا ومارجرجس', 'العدرا ومارمينا', 'العدرا والبابا كيرلس'],
    rightAnswer: 'العدرا والبابا كيرلس',
  },
  {
    id: 21,
    statement: 'تاريخ سفر ابونا فلتاؤس للسما ؟',
    answers: ['21 مارس', '17 مارس', '2 مارس'],
    rightAnswer: '17 مارس',
  },
  {
    id: 22,
    statement: 'مين رسم ابونا بيشوي كامل كاهن ؟',
    answers: ['البابا شنودة', 'البابا كيرلس', 'البابا تاوضروس'],
    rightAnswer: 'البابا كيرلس',
  },
  {
    id: 23,
    statement: 'كان نفسه يبقى ايه قبل ما يبقى كاهن ؟',
    answers: ['مهندس', 'دكتور', 'راهب'],
    rightAnswer: 'راهب',
  },
  {
    id: 24,
    statement: 'اسم الكنيسة اللى اترسم عليها؟',
    answers: ['مارمينا', 'انبا انطونيوس', 'مارجرجس'],
    rightAnswer: 'مارجرجس',
  },
  {
    id: 25,
    statement: 'ايه هو الصليب اللى شاله ابونا بيشوي ؟',
    answers: ['صليب الاهانة', 'صليب العذابات', 'صليب المرض'],
    rightAnswer: 'صليب المرض',
  },
  {
    id: 26,
    statement: 'تاريخ نياحة ابونا بيشوي ؟',
    answers: ['15 مارس', '12 مارس', '21 مارس'],
    rightAnswer: '21 مارس',
  },
  {
    id: 27,
    statement: 'سيدهم بيشاي كانت رتبتة اية ؟',
    answers: ['شماس', 'قارئ', 'رئيس شمامسة'],
    rightAnswer: 'رئيس شمامسة',
  },
  {
    id: 28,
    statement: 'سيدهم بشاي كان شغال اية ؟',
    answers: ['نجار', 'محاسب', 'تاجر خشب'],
    rightAnswer: 'تاجر خشب',
  },
  {
    id: 29,
    statement: 'سيدهم بشاي كان بيحب يجيب الخشب منين ؟',
    answers: ['القليوبية', 'دمياط', 'اسكندرية'],
    rightAnswer: 'دمياط',
  },
  {
    id: 30,
    statement: 'ايه علاقة سيدهم بشاي بالصليب ؟',
    answers: [
      'كان لابس الصليب',
      'بسببه اترفع الصليب علي الكنائس',
      'ملهوش علاقة بالصليب',
    ],
    rightAnswer: 'بسببه اترفع الصليب علي الكنائس',
  },
  {
    id: 31,
    statement: 'تاريخ استشهاد سيدهم بشاي ؟',
    answers: ['٢٨ مارس', '١٦ مارس', '٢٦ مارس'],
    rightAnswer: '٢٦ مارس',
  },
  {
    id: 32,
    statement:
      'مكان الكنيسة اللى كان بيخدم فيها ابونا ميخائيل اول ما بقى كاهن ؟',
    answers: ['المنوفية', 'الاسكندرية', 'الجيزة'],
    rightAnswer: 'المنوفية',
  },
  {
    id: 33,
    statement: 'كنيسة مارمرقس اللى راح يخدم فيها كانت فين ؟',
    answers: ['شبرا', 'بنها', 'قويسنا'],
    rightAnswer: 'شبرا',
  },
  {
    id: 34,
    statement: 'كام ولد راح السما من ولاد ابونا ميخائيل ؟',
    answers: ['4', '3', '2'],
    rightAnswer: '3',
  },
  {
    id: 35,
    statement: 'اسم ابنه الكبير ايه ؟',
    answers: ['موسي', 'ابراهيم', 'مينا'],
    rightAnswer: 'ابراهيم',
  },
  {
    id: 36,
    statement: 'ابونا ميخائيل كان مشهور عنه ايه ؟',
    answers: ['التواضع', 'الايمان', 'إنه أب اعتراف البطاركة والاساقفة'],
    rightAnswer: 'إنه أب اعتراف البطاركة والاساقفة',
  },
  {
    id: 37,
    statement: 'تاريخ سفر ابونا ميخائيل السما؟',
    answers: ['٢٢ مارس', '١٦ مارس', '٢٦ مارس'],
    rightAnswer: '٢٦ مارس',
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
