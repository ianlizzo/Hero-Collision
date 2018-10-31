import React, { Component } from 'react'
import './HeroTeam.css'
import JoinedHero from './JoinedHero';


class HeroTeam extends Component {
  render() {
    let removeHero = this.props.removeHero
    return (
      <div className="HeroTeam">
        <h2>YOUR TEAM</h2>
        {this.props.team.map(hero => 
          <JoinedHero key={hero.id} hero={hero} removeHero={removeHero}/ >
        )}       
      </div>
    )
  }
}

export default HeroTeam