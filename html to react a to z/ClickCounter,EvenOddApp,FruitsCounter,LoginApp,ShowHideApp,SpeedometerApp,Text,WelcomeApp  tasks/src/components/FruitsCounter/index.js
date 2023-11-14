import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mangoClick = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  bananaClick = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-containers">
        <div className="second-container">
          <h1>
            Bob ate <span className="counting-text">{mangoCount}</span> mangoes{' '}
            <span className="counting-text">{bananaCount}</span> bananas
          </h1>
          <div className="section-container">
            <div className="fruits-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.mangoClick}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruits-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.bananaClick}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter