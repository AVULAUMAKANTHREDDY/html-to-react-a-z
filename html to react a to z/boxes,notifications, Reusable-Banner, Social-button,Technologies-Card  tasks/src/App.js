import React from 'react';
import './App.css';
import Button from './Component/Social-button-task/index';
import Notification from './Component/Notification-task/index';
import Box from './Component/Boxes-task/index';
import BannerCardItem from'./Component/Reusable-Banner-task/index';
import CardItem from './Component/Technologies-Card-task/index';



// banner
const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'banner-card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'banner-card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'banner-card-3',
  },
]



// technology

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]


function App() {
  return (
    <div >

      {/* buttons */}
      <div className="buttons-container">
        <h1 className="button-heading">Social Buttons </h1>
        <div className="button-container">
          <Button name="like" className="Like" />
          <Button name="comment" className="Comment" />
          <Button name="share" className="Share" />
        </div>
      </div>

      {/* notification */}
      <div className="content-conatiner">
        <h1 className="main-heading">Notifications</h1>
        <div className="notification-container">
          <Notification
            name="Information Message"
            className="information"
            url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          />
          <Notification
            name="Success Message"
            className="success"
            url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          />
          <Notification
            name="Warning Message"
            className="warning"
            url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          />
          <Notification
            name="Error Message"
            className="error"
            url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          />
        </div>
      </div>


      {/* boxes */}

      <div className="Boxes-container">
        <h1 className="box-heading">Boxes</h1>
        <div className="box-conatiner">
          <Box name="Small" className="small" />
          <Box name="Medium" className="medium" />
          <Box name="Large" className="large" />
        </div>
      </div>


      {/* banner */}

      <div className="banner-container">
        <ul className="banner-card-container">
          {bannerCardsList.map(eachItem => (
            <BannerCardItem bannerDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>


      {/* technology */}

      <div className="technology-container">
        <div className="technology-content-container">
          <h1 className="technology-heading">Learn 4.0 Technologies</h1>
          <p className="technology-description">
            Get trained by alumni of IITs and top companies like
            Amazon,Microsoft,intel,Nvidia, Qualcomm etc. Learn directly from
            professionals involved in Product Development.
          </p>
          <ul className="technology-cards-container">
            {cardsList.map(eachItem => (
              <CardItem details={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>

      
    </div>
  );
}

export default App;
