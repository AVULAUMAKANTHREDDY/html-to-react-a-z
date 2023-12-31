import React,{useState} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const Capitals=()=> {

    const [countryName,setCountryName]=useState(countryAndCapitalsList[0].country)

   const onChangeCapital = event => {
    const countryValue = countryAndCapitalsList.filter(
      eachItem => eachItem.id === event.target.value
    )
    console.log(countryValue)
    setCountryName( countryValue[0].country)
  }


    return (
      <div className="app-container">
        <div className="question-container">
          <h1 className="main-heading">Countries and Capitals</h1>
          <div>
            <select
              id="capitalsDropDown"
              className="drop-down"
              onChange={onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitalsDropDown" className="label">
              is capital of which country?
            </label>
            <p className="country-name">{countryName}</p>
          </div>
        </div>
      </div>
    )
}

export default Capitals