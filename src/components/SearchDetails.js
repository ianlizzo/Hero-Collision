import React, { Component } from 'react'
import './SearchDetails.css'
import Button from '@material-ui/core/Button';
// import Hero from './Hero'

// TODO: Grid Layout
class SearchDetails extends Component {
  render() {
    const addHero = this.props.addHero
    const reduceArray = (a) => Array.isArray(a) ? a.join(', ') : a
    const {id, name, image, powerstats, biography, appearance } = this.props.details
  return (
      <div className="SearchDetails">
        { id && 
          <div id="hero-details">
            <div id="col-1">
              <h2>{name}</h2>
              <img id="image-details" alt={id}src={image && image.url} />
              <div id="button-wrapper">
                <Button variant="raised" size="large" onClick={() => addHero(this.props.details)}>
                  Add
                </Button>
              </div>
            </div>
            <div id="col-2"> 
              <h2>Powerstats</h2>
              {powerstats && Object.keys(powerstats).map((key, index) => 
                <p key={index}>{key}: {powerstats[key]}</p>
              )}
            </div>
            <div id="col-3">
              <h2>Biography</h2>
              {biography && Object.keys(biography).map((key, index) => 
                <p key={index}>{key.replace(/-/g, " ")}: {
                  reduceArray(biography[key])
                }</p>
              )}
            </div>
            <div id="col-4">
              <h2>Appearance</h2>
              {appearance && Object.keys(appearance).map((key, index) => 
                <p key={index}>{key.replace(/-/g, " ")}: { 
                  reduceArray(appearance[key])
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