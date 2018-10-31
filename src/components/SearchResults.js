import React, { Component } from 'react'
import './SearchResults.css'
import Hero from './Hero'

class SearchResults extends Component {
  render() {
    const selectHero = this.props.selectHero
    return (
      <div className="SearchResults">
        {this.props.results && this.props.results.map(hero => 
          <div id="select-hero" key={hero.id} onClick={() => selectHero(hero)}>
            <Hero key={hero.id} hero={hero} style={{cursor: 'pointer'}}/>
          </div>
        )}
      </div>
    )
  }
}

export default SearchResults 