import React, { Component } from 'react'
import './SearchResults.css'
import Hero from './Hero'

class SearchResults extends Component {
  render() {
    const selectHero = this.props.selectHero
    return (
      <div className="SearchResults">
        {this.props.results && this.props.results.map((hero, i) => 
          <div id="select-hero" key={i} onClick={() => selectHero(hero.id)}>
            <Hero key={i} hero={hero} style={{ cursor: 'pointer' }}/>
          </div>
        )}
      </div>
    )
  }
}

export default SearchResults 