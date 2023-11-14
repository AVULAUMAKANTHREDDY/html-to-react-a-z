import './index.css'

import React, { useState, useEffect } from 'react'
import TeamCard from '../TeamCard'

const Home = () => {

  const [teamsData, setTeamsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    getTeamsList()
  }, [])

  

  const getTeamsList = async () => {
    try {
      const url = `https://apis.ccbp.in/ipl`;
      const options ={
        method:"GET"
      };
      const response = await fetch(url,options)
      const fetchData = await response.json()
      const updatedData = fetchData.teams.map(eachData => ({
        name: eachData.name,
        imageUrl: eachData.team_image_url,
        id: eachData.id,
      }))
      setTeamsData(updatedData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error)
    }

  }

 

  const renderTeamsList = () => {
    return (
      <ul className="team-list-items">
        {teamsData.map(team => (
          <TeamCard key={team.id} teamData={team} />
        ))}
      </ul>
    )
  }

 
  const renderLoader = () => (
    <div testid="loader" className="loader-container">
      <div class="spinner-border text-primary"></div>
    </div>
  )


  return (
    <div className="app-container">
      <div className="ipl-container">
        <div className="header-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl-logo"
          />
          <h1 className="header-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? renderLoader() : renderTeamsList()}
      </div>
    </div>
  )
}

export default Home
