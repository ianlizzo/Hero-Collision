import React, { Component } from 'react'
import './JoinedHero.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class JoinedHero extends Component {
  render() {
    const { hero } = this.props
    let removeHero = this.props.removeHero
    const background = { backgroundImage: `url(${hero.image.url})` } 
    return (
      <div className="JoinedHero">
        <div id="joined-hero-image" style={ background }>
          <Button variant="contained" 
                  size="small" 
                  aria-label="Delete" 
                  color="secondary"
                  onClick={() => removeHero(hero)}>
            <DeleteIcon fontSize="small"/>
          </Button>
          <div id="joined-text-box">      
            <p>{hero.name}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default JoinedHero
