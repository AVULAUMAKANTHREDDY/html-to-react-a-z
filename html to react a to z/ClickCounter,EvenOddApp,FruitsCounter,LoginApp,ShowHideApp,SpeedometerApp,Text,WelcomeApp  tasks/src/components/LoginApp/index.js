import './index.css'
import {Component} from 'react'


const Logout = props => {
    const {className, onClick} = props
    return (
      <button className={className} type="button" onClick={onClick}>
        Logout
      </button>
    )
  }
  

  const Login = props => {
    const {className, onClick} = props
    return (
      <button className={className} type="button" onClick={onClick}>
        Login
      </button>
    )
  }

const Message = props => {
    const {isLoggedin, className} = props
    return isLoggedin ? (
      <h1 className={className}>Please Login</h1>
    ) : (
      <h1 className={className}>Welcome User</h1>
    )
  }

class LoginApp extends Component {
  state = {isLogin: true}


  

  onClickEvent = () => {
    const {isLogin} = this.state

    if (isLogin === true) {
      this.setState(() => ({
        isLogin: false,
      }))
    } else {
      this.setState(() => ({
        isLogin: true,
      }))
    }
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="login-container">
        <div className="login-conatiner">
          <Message isLoggedin={isLogin} className="login-description" />
          {isLogin ? (
            <Login className="login-btn" onClick={this.onClickEvent} />
          ) : (
            <Logout className="login-btn" onClick={this.onClickEvent} />
          )}
        </div>
      </div>
    )
  }
}

export default LoginApp