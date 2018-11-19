import React, { Component } from 'react'
import './SearchDetails.css'
import Button from '@material-ui/core/Button';

class SearchDetails extends Component {
  render() {
    const hero = this.props.details
    const addHero = () => this.props.addHero(hero.id)
    const reduceArray = a => Array.isArray(a) ? a.join(', ') : a
  return (
      <div className="SearchDetails">
        {hero.id && 
          <div id="hero-details">
            <div id="col-1">
              <h2>{hero.name}</h2>
              <img id="image-details" alt={hero.id}src={hero.image.url} />
              <div id="button-wrapper">
                <Button variant="contained" size="large" onClick={addHero}>
                  Add
                </Button>
              </div>
            </div>
            <div id="col-2"> 
              <h2>Powerstats</h2>
              {Object.keys(hero.powerstats).map((key, index) => 
                <p key={index}>{key}: {hero.powerstats[key]}</p>
              )}
            </div>
            <div id="col-3">
              <h2>Biography</h2>
              {Object.keys(hero.biography).map((key, index) => 
                <p key={index}>{key.replace(/-/g, " ")}: {
                  reduceArray(hero.biography[key])
                }</p>
              )}
            </div>
            <div id="col-4">
              <h2>Appearance</h2>
              {Object.keys(hero.appearance).map((key, index) => 
                <p key={index}>{key.replace(/-/g, " ")}: { 
                  reduceArray(hero.appearance[key])
                }</p>
              )}
            </div>
          </div>
        }
      </div>
    )
  }
}

export default SearchDetails