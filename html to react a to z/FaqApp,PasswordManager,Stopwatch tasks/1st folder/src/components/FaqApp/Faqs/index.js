import React, {useState} from 'react'

import './index.css'

import FaqItem from '../Faqitem'

const Faqs=({faqsList})=> {
 const [list]= useState(faqsList)

  

    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faqs-list-items">
            {list.map(eachFqs => (
              <FaqItem faqsDetails={eachFqs} key={eachFqs.id} />
            ))}
          </ul>
        </div>
      </div>
    )
}

export default Faqs