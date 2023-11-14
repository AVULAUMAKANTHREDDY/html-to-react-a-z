import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  OnIncrement = () => {
    this.setState(prev => ({count: prev.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="Main-Container">
        <h1 className="heading-text">
          The Button has been clicked
          <span className="counterValue"> {count}</span> times
        </h1>
        <p className="paratext">Click the button to increase the count</p>
        <button
          className="Increment-Btn"
          type="button"
          onClick={this.OnIncrement}
        >
          click me
        </button>
      </div>
    )
  }
}

export default ClickCounter