import React, {useState} from 'react'

import './index.css'


const FaqItem =(props)=> {
    const {faqsDetails} = props
    const {answerText,questionText} = faqsDetails

  const [showAns,setShowAns]=useState(false)


  const onCLickGetAnswer = () => {
    setShowAns(!showAns)
  }

  

  const getAnswer = () => {
   

    return (
      <div>
        <hr className="horizontal-line" />
        <p className="answer">{answerText}</p>
      </div>
    )
  }


 
    const imgUrl = showAns
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAlt = showAns ? 'plus' : 'minus'

   

    return (
      <li className="faq-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <img
            src={imgUrl}
            alt={imgAlt}
            className="toggle-img"
            onClick={onCLickGetAnswer}
          />
        </div>
        {showAns && getAnswer()}
      </li>
    )
}

export default FaqItem;