import React, { useState, useEffect } from 'react';
import './index.css';

const PasswordManager = () => {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [passwords, setPasswords] = useState([]);
  const [passwordsCount, setPasswordsCount] = useState(0);

  const addPassword = () => {
    if (website && username && password) {
      const newPassword = { website, username, password };
      setPasswords([...passwords, newPassword]);
      setPasswordsCount(passwordsCount + 1);
      setWebsite('');
      setUsername('');
      setPassword('');
    }
  };

  const deletePassword = (index) => {
    const updatedPasswords = [...passwords];
    updatedPasswords.splice(index, 1);
    setPasswords(updatedPasswords);
    setPasswordsCount(passwordsCount - 1);
  };

  useEffect(() => {
    if (passwordsCount === 0) {
      setShowPassword(false);
    }
  }, [passwordsCount]);

  const filteredPasswords = passwords.filter((entry) =>
    entry.website.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="password-manager-bg-container">
      <div className='password-manager'>
        <div className='input-website-container search-element'>
      <div className="password-manager-header">
        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" alt="app logo" />
        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png" alt="password manager" />
      </div>
      <div className="password-inputs">
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label >
          Show Password
          <input className='check-box' type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
        </label>
      </div>
      <button className='add-button' onClick={addPassword}>Add</button>
      <div className="search-input">
        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt="search" />
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="password-list">
        {filteredPasswords.length > 0 ? (
          filteredPasswords.map((passwordEntry, index) => (
            <div className="password-item" key={index}>
              <img src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" alt="website" />
              <p>{passwordEntry.website}</p>
              <img src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png" alt="username" />
              <p>{passwordEntry.username}</p>
              <img src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" alt="password" />
              <p>{showPassword ? passwordEntry.password : '********'}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                alt="delete"
                onClick={() => deletePassword(index)}
              />
            </div>
          ))
        ) : (
          <div className="no-passwords">
            <img src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt="no passwords" />
            <p>No Passwords</p>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default PasswordManager;
