import React, { useState, useEffect } from "react";
import Stopwatch from "./components/Stopwatch/index";
import Faqs from "./components/FaqApp/Faqs/index";
import PasswordManager from "./components/PasswordManager/PasswordForm/index";
import './App.css'

const faqsList = [
  {
    id: 0,
    questionText: 'What is React?',
    answerText:
    'React is a JavaScript library for building user interfaces.',
  },
  {
    id: 1,
    questionText: 'How do I install React?',
    answerText:
    'You can install React using npm or yarn.' ,
    
  },
  {
    id: 2,
    questionText:
    'What are React Hooks?',
    answerText:
    'React Hooks are functions that let you use state and other React features in functional components.',
  },
  {
    id: 3,
    questionText: 'What is IRC?',
    answerText:
    'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
  },
  {
    id:4,
    questionText:'What Are The Reactjs Limitations?',
    answerText:' React will use inline templating and JSX which might seem awkward to a few developers. ReactJS is only for the view layer ...',
  },
  {
    id:5,
    questionText:'What is props?',
    answerText:'In react, we have functional components, and we have props, function itself serves as the render method, but instead of having access to the props at this point ',
  },
  {
    id:6,
    questionText:'What is virtual DOM?',
    answerText:'A Virtual DOM is a lightweight JavaScript object which is an in-memory representation of real DOM. It is an intermediary step between the render function being ',
  },
]





function App() {
  return (
    
    <div className="App">
       <Stopwatch />
      <Faqs faqsList={faqsList}/>
          <PasswordManager/>
    </div>   
   
  );
}
export default App;
