import React from 'react';
import FAQsAPP from './Components/FaqApp/index';
// import PasswordManager from './Components/Passwordmanager/index';
import PasswordManager from './Components/Passwordmanager/index';
import Stopwatch from './Components/Stopwatch/index';
const faqsList = [
    {
        id: 0,
        questionText: 'What is IRC?',
        answerText:
            'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
    },
    {
        id: 1,
        questionText: 'What Are The Reactjs Limitations?',
        answerText: ' React will use inline templating and JSX which might seem awkward to a few developers. ReactJS is only for the view layer ...',
    },
    {
        id: 2,
        questionText: 'What is props?',
        answerText: 'In react, we have functional components, and we have props, function itself serves as the render method, but instead of having access to the props at this point ',
    },
    {
        id: 3,
        questionText: 'What is virtual DOM?',
        answerText: 'A Virtual DOM is a lightweight JavaScript object which is an in-memory representation of real DOM. It is an intermediary step between the render function being ',
    },

    // {
    //     id: 4,
    //     questionText: 'What is React?',
    //     answerText: 'React is a JavaScript library for building user interfaces.',
    // },
   
  
];

function App() {
    return (
        <div className="App">
          
            <Stopwatch/>
            <FAQsAPP faqsList={faqsList} />
            <PasswordManager />
        </div>
    );
}

export default App;