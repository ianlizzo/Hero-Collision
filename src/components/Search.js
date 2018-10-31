import React, { Component } from 'react'
import SearchBar from 'material-ui-search-bar'
import SearchResults from './SearchResults'
import { searchHeroes, getHero } from './api'
import SearchDetails from './SearchDetails'
import HeroTeam from './HeroTeam'
// import Grid from '@material-ui/core/Grid'

class Search extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      error: null,
      query: '',
      results: [],
      selectedHero: [],
      team: []
    }
    this.selectHero = this.selectHero.bind(this)
    this.addHero = this.addHero.bind(this)
    this.removeHero = this.removeHero.bind(this)
  }

  performQuery = () => {
    this.setState({
      error: null
    })
    if (this.state.query) {
      return searchHeroes({
        q: this.state.query
      }).then(query => { this.setState({
        results: query.results
      })
      console.log('FULFILLING')
    }).catch(() => this.setState({
        error: 'Sorry, but something went wrong.'
      }))
    }
  }

  selectHero = (data) => {
    this.setState({
      error: null
    })
    return getHero({
      hero: data
    }).then(hero => this.setState({
      selectedHero: hero
    })).catch(() => this.setState({
      error: 'Sorry, something went wrong!'
    }))
  }

  addHero = (data) => {
    this.setState({
      error: null
    })
    if (this.state.team.length < 6) {
      return getHero({
        hero: data
      }).then(hero => this.setState({
        team: [...this.state.team, hero].reduce((unique, newHero) => {
          if(!unique.some(existing => existing.id === newHero.id)) {
            unique.push(newHero);
          }
            return unique;
        },[])
      })).catch(() => this.setState({
        error: 'Sorry, something went wrong!'
      }))
    }
  }

  removeHero(hero) {
    let updatedTeam = [...this.state.team]; // make a separate copy of the array
    const index = updatedTeam.indexOf(hero)
    updatedTeam.splice(index, 1);
    this.setState({team: updatedTeam});
  }

  render() {
    return (
      <div className="Search">
        <SearchBar className="SearchBar"
          value={this.state.query}
          onChange={(newQuery) => this.setState({ query: newQuery})}
          onRequestSearch={this.performQuery}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 100,
            maxWidth: 1000
          }}
        />
        {this.state.error && (
          <div className="error">
            {this.state.error}
          </div>
        )}
        <SearchResults results={this.state.results} selectHero={this.selectHero} />
        <SearchDetails details={this.state.selectedHero} addHero={this.addHero} />
        {this.state.team.length > 0 && (
          <HeroTeam team={this.state.team} removeHero={this.removeHero} />
        )}
      </div>
    )
  }
}

export default Search
