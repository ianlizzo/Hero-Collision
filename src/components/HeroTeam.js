import React, { Component } from 'react'
import './HeroTeam.css'
import './Hero.css'
import JoinedHero from './JoinedHero';

class HeroTeam extends Component {
  render() {
    const removeHero = this.props.removeHero
    const team = this.props.team
    const score = (obj) => Object.values(obj).reduce((a, b) => Math.floor((+a + +b) / 6));
    let ts = 0
    return (
      <div className="HeroTeam">
        <div id="team-text">
          <h2>YOUR TEAM</h2>
          {team && team.forEach(hero => {
            ts += score(hero.powerstats)
          })} 
          <h2>Team Score: </h2>
          <h1>{Math.floor(ts)}</h1>
        </div>
        {team && team.map(hero => 
          <div id="select-hero" key={hero.id}>
            <JoinedHero key={hero.id} hero={hero} removeHero={removeHero} />
          </div>
        )}
        
      </div>
    )
  }
}

export default HeroTeam