import React, { Component } from 'react'
import SearchBar from 'material-ui-search-bar'
import SearchResults from './SearchResults'
import './Search.css'
import { searchHeroes, getHero } from './realApi'
// import { searchHeroes, getHero } from './api'
import SearchDetails from './SearchDetails'
import HeroTeam from './HeroTeam'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      query: '',
      results: [],
      selectedHero: [],
      team: [],
      welcome: true
    }

    this.selectHero = this.selectHero.bind(this)
    this.addHero = this.addHero.bind(this)
    this.removeHero = this.removeHero.bind(this)
  }

  performQuery = () => {
    this.setState({
      error: null,
      welcome: false
    })
    if (!this.state.query) {
      alert('Please enter a non-empty query')
    }
    return this.state.query && searchHeroes({
      params: this.state.query
    }).then(query => (query.response !== 'error') 
      ? this.setState({
        results: query.results,
        welcome: false
      }) 
      : this.setState({
        error: query.error 
      })
    ).catch(() => this.setState({
      error: "Request timed out!"
    })).then(() => this.state.error && alert(this.state.error))
  }

  selectHero = (data) => {
    this.setState({
      error: null
    })
    return getHero({
      params: data
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
        params: data
      }).then(hero => this.setState({
        team: [...this.state.team, hero].reduce((unique, newHero) => {
          if (!unique.some(existing => existing.id === newHero.id)) {
            unique.push(newHero)
          }
          return unique
          }, []),
      })).catch(() => this.setState({
        error: 'Sorry, something went wrong!'
      }))
    }
    alert('Maximum team slots alloted!')
  }

  removeHero = (hero) => {
    const updatedTeam = [...this.state.team]
    const index = updatedTeam.indexOf(hero)
    updatedTeam.splice(index, 1)
    this.setState({ team: updatedTeam })
  }

  updateQuery = (q) => {
    this.setState({ query: q })
  }


  render() {
    return (
      <div className="Search">
        <SearchBar
          className="SearchBar"
          value={this.state.query}
          onChange={this.updateQuery}
          onRequestSearch={this.performQuery}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 100,
            maxWidth: 1000
          }}
        />
        {this.state.welcome && (
        <div id="welcome">
          <p>Enter your favorite hero or villain!</p>
        </div>
        )}
        <SearchResults results={this.state.results} selectHero={this.selectHero} />
        <SearchDetails details={this.state.selectedHero} addHero={this.addHero} />
        {this.state.team.length > 0 && (
          <HeroTeam
            team={this.state.team}
            removeHero={this.removeHero}
          />
        )}
      </div>
    )
  }
}

export default Search
