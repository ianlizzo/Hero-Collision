import React, { Component } from 'react'
import './Hero.css'

class Hero extends Component {
  render() {
    const { hero } = this.props
    const styles = { 
      backgroundImage: `url(${hero.image.url})`,
      cursor: 'pointer'
    }
    return (
      <div className="Hero">
        <div className="hero-image" style={styles} >
          <div className="text-box">
              <p>{hero.name}</p>
          </div>
        </div>
      </div>
    )
    
  }
}

export default Hero
