import React,{useState} from 'react'
// import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem/index'
import './index.css'

const PasswordManager = ()=> {
    // class PasswordManager extends Component {
    const [inputWebsite,setInputWebsite] = useState('');
    const [inputUsername,setInputUsername] = useState('');
    const [inputPassword,setInputPassword] = useState('');
    const [passwordsList,setPasswordsList] = useState([]);
    const [searchInput,setSearchInput] = useState('');
    const [showPasswords,setShowPasswords] = useState(false);

//   state = {
//     inputWebsite: '',
//     inputUsername: '',
//     inputPassword: '',
//     passwordsList: [],
//     searchInput: '',
//     showPasswords: false,
//   }

  const onChangeWebsite = event => {
    setInputWebsite(event.target.value)
  }

//   onChangeWebsite = event => {
//     this.setState({inputWebsite: event.target.value})
//   }

  const onChangeUsername = event => {
    setInputUsername(event.target.value)
  }

//   onChangeUsername = event => {
    // this.setState({inputUsername: event.target.value})
//   }

  const onChangePassword = event => {
    setInputPassword(event.target.value)
  }

//   onChangePassword = event => {
//     this.setState({inputPassword: event.target.value})
//   }

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }


//   onChangeSearchInput = event => {
//     this.setState({searchInput: event.target.value})
//   }

  const onAddPassword = event => {
    event.preventDefault()
    // const {inputWebsite, inputUsername, inputPassword} = this.state
    if (inputWebsite !== '' && inputUsername !== '' && inputPassword !== '') {
      const passwordDetails = {
        id: uuidv4(),
        website: inputWebsite,
        username: inputUsername,
        password: inputPassword,
      }
    //   this.setState(prevState => ({
        setPasswordsList([...passwordsList, passwordDetails]);
        setInputUsername('');
        setInputWebsite ('');
        setInputPassword('');
    //   }))
    }
  }

//   onAddPassword = event => {
//     event.preventDefault()
//     const {inputWebsite, inputUsername, inputPassword} = this.state
//     if (inputWebsite !== '' && inputUsername !== '' && inputPassword !== '') {
//       const passwordDetails = {
//         id: uuidv4(),
//         website: inputWebsite,
//         username: inputUsername,
//         password: inputPassword,
//       }
//       this.setState(prevState => ({
//         passwordsList: [...prevState.passwordsList, passwordDetails],
//         inputUsername: '',
//         inputWebsite: '',
//         inputPassword: '',
//       }))
//     }
//   }

  const onDeletePassword = id => {
    // const {passwordsList} = this.state
    const updatedPasswords = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )
    setPasswordsList(updatedPasswords)
  }

//   onDeletePassword = id => {
//     const {passwordsList} = this.state
//     const updatedPasswords = passwordsList.filter(
//       eachPassword => eachPassword.id !== id,
//     )
//     this.setState({passwordsList: updatedPasswords})
//   }


  const onChangePasswordView = () => {
    setShowPasswords(!showPasswords)
  }

  
//   onChangePasswordView = () => {
//     this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
//   }


  const getPasswordsList = () => {
    // const {passwordsList, searchInput} = this.state
    const filteredPasswordsList = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredPasswordsList
  }

//   getPasswordsList = () => {
//     const {passwordsList, searchInput} = this.state
//     const filteredPasswordsList = passwordsList.filter(eachPassword =>
//       eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
//     )
//     return filteredPasswordsList
//   }

//   render() {
    // const {
    //   inputWebsite,
    //   inputUsername,
    //   inputPassword,
    //   showPasswords,
    // } = this.state

    const updatedPasswordsList = getPasswordsList()
    const passwordsCount = updatedPasswordsList.length
    return (
      <div className="password-manager-bg-container">
        <div className="password-manager">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="head-image"
            />
            <form
              className="input-element-container"
              onSubmit={onAddPassword}
            >
              <h1 className="add-new">Add New Password</h1>
              <div className="input-website-container">
                <div className="input-logo">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="logo"
                  />
                </div>
                <div className="input-element">
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input"
                    onChange={onChangeWebsite}
                    value={inputWebsite}
                  />
                </div>
              </div>
              <div className="input-website-container">
                <div className="input-logo">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="logo"
                  />
                </div>
                <div className="input-element">
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input"
                    onChange={onChangeUsername}
                    value={inputUsername}
                  />
                </div>
              </div>
              <div className="input-website-container">
                <div className="input-logo">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="logo"
                  />
                </div>
               
                <div className="input-element">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input"
                    onChange={onChangePassword}
                    value={inputPassword}
                  />
                </div>
              </div>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="output-container">
            <div className="top-section">
              <div className="counter-section">
                <h1 className="your-password">Your Passwords</h1>
                <div className="counter">
                  <p className="count">{passwordsCount}</p>
                </div>
              </div>
              <div className="input-website-container search-element">
                <div className="input-logo">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="logo"
                  />
                </div>
                <div className="input-element">
                  <input
                    type="search"
                    placeholder="Search"
                    className="input"
                    onChange={onChangeSearchInput}
                  />
                </div>
              </div>
            </div>
            <hr className="h-line" />
            <div className="toggle-view">
              <input
                id="checkBox"
                type="checkbox"
                className="check"
                onChange={onChangePasswordView}
                value={showPasswords}
              />
              <label htmlFor="checkBox" className="show-password">
                Show Passwords
              </label>
            </div>
            {updatedPasswordsList.length === 0 ? (
              <div className="no-passwords-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-image"
                />
                <p className="no-passwords">No Passwords</p>
              </div>
            ) : (
              <ul className="outputs">
                {updatedPasswordsList.map(eachPassword => (
                  <PasswordItem
                    key={eachPassword.id}
                    passwordDetails={eachPassword}
                    onDeletePassword={onDeletePassword}
                    showStatus={showPasswords}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
//   }
}

export default PasswordManager