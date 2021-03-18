import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.global.css';
import Questions from './components/questions/Questions';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>اختر الإجابة الصحيحة</h1>
      <Link to="/questions" className="action-btn">
        السؤال الأول
      </Link>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/questions" exact component={Questions} />
        <Route path="/" component={Welcome} />
      </Switch>
    </Router>
  );
}
