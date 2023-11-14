import './index.css'

import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

const TeamMatches =()=>{
  const params = useParams();
  const {id} = params;
  const [matchesData,setMatchesData]=useState([]);
  const [isLoading,setIsLoading]=useState(true);

  

  useEffect(()=>{
    getTeamMatches()
  });

  const getTeamMatches = async () => {

    try{
      
      const url = `https://apis.ccbp.in/ipl/${id}`;
      const options ={
        method:"GET"
      };
      const response = await fetch(url,options)
      const fetchedData = await response.json()
      const updatedData = {
        teamBannerUrl: fetchedData.team_banner_url,
        latestMatchDetails: {
          id: fetchedData.latest_match_details.id,
          competingTeam: fetchedData.latest_match_details.competing_team,
          competingTeamLogo: fetchedData.latest_match_details.competing_team_logo,
          date: fetchedData.latest_match_details.date,
          firstInnings: fetchedData.latest_match_details.first_innings,
          manOfTheMatch: fetchedData.latest_match_details.man_of_the_match,
          matchStatus: fetchedData.latest_match_details.match_status,
          result: fetchedData.latest_match_details.result,
          secondInnings: fetchedData.latest_match_details.second_innings,
          umpires: fetchedData.latest_match_details.umpires,
          venue: fetchedData.latest_match_details.venue,
        },
        recentMatches: fetchedData.recent_matches.map(recentMatch => ({
          umpires: recentMatch.umpires,
          result: recentMatch.result,
          manOfTheMatch: recentMatch.man_of_the_match,
          id: recentMatch.id,
          date: recentMatch.date,
          venue: recentMatch.venue,
          competingTeam: recentMatch.competing_team,
          competingTeamLogo: recentMatch.competing_team_logo,
          firstInnings: recentMatch.first_innings,
          secondInnings: recentMatch.second_innings,
          matchStatus: recentMatch.match_status,
        })),
      }
      setMatchesData(updatedData);
      setIsLoading(false)

    } catch (error) {
      console.error('Error fetching data:', error)
    }
   
  }

  const renderTeamMatches = () => {
    const {teamBannerUrl, latestMatchDetails} = matchesData
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="img" className="team-banner" />
        <LatestMatch latestMatch={latestMatchDetails} />
        {renderRecentMatchesList()}
      </div>
    )
  }

  const renderRecentMatchesList = () => {
    const {recentMatches} = matchesData
    return (
      <ul className="recent-matches-list">
        {recentMatches.map(eachMatch => (
          <MatchCard matchData={eachMatch} key={eachMatch.id} />
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
      <div className={`app-team-matches-container ${id}`}>
        {isLoading ? renderLoader() : renderTeamMatches()}
      </div>
    )
}

export default TeamMatches
