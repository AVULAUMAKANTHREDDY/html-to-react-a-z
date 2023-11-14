import React from 'react';
import './App.css';
import Clickcounter from './components/ClickCounter';
import EvenOddApp from './components/EvenOddApp';
import FruitsCounter from './components/FruitsCounter';
import LoginApp from './components/LoginApp/index';
import ShowHide from './components/ShowHideApp';
import Speedometer from './components/SpeedometerApp';
import Welcome from './components/WelcomeApp';

const App = () => {
        return (
                <div>
                        <Clickcounter />
                        <EvenOddApp />
                        <FruitsCounter />
                        <LoginApp />
                        <ShowHide />
                        <Speedometer />
                        <Welcome />
                </div>
        );
}
export default App;


