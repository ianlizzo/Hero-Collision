import React, { Component } from 'react'
import './Hero.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class JoinedHero extends Component {
  render() {
    const { hero } = this.props
    const removeHero = () => this.props.removeHero(hero)
    const styles = { 
      backgroundImage: `url(${hero.image.url})`,
      cursor: 'pointer'
    } 
    return (
      <div className="Hero">
        <div className="hero-image" style={styles}>
          <Button variant="contained" 
                  size="small" 
                  aria-label="Delete" 
                  color="secondary"
                  onClick={removeHero}>
            <DeleteIcon fontSize="small" />
          </Button>
          
          <div className="text-box">      
            <p>{hero.name}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default JoinedHero
