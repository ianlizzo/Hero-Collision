import React from 'react'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import sinon from 'sinon'

import Search from './Search'

import * as api from './realApi'

describe('Search bar', () => {
  it('should be enabled when the search field is not blank', () => {
    const component = TestRenderer.create(<Search />)
    component.getInstance().setState({
      query: 'MARTHAAAAAAAAAAAAAAAA'
    })

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should be disabled when the search field is blank', () => {
    const component = TestRenderer.create(<Search />)
    component.getInstance().setState({
      query: '',
    })

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should start with an empty search field', () => {
    const component = TestRenderer.create(<Search />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('Search bar button', () => {
    it('should start with a search button that does not run on empty queries', () => {
      const component = TestRenderer.create(<Search />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
    
    it('should update its state when the search field value changes', () => {
      const component = ReactTestUtils.renderIntoDocument(<Search />)
      const input = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input')
      input.value = 'martha'
      ReactTestUtils.Simulate.change(input)
      expect(component.state.query).toEqual('martha')
    })
  
  })
  
  describe('API calls', () => {
    const component = TestRenderer.create(<Search />)
  
    beforeEach(() => {
      sinon.stub(api, 'searchHeroes')
      // To manage size, we supply a mock response that contains _only_ what the app will need. This does mean
      // that we need to revise the mock response if our app starts using more (or different) data.
      api.searchHeroes.returns(Promise.resolve({
        "response": "success",
        "results-for": "batman",
        "results": [
          {
            "id": "69",
            "name": "Batman",
            "powerstats": {
              "intelligence": "81",
              "strength": "40",
              "speed": "29",
              "durability": "55",
              "power": "63",
              "combat": "90"
            },
            "biography": {
              "full-name": "Terry McGinnis",
              "alter-egos": "No alter egos found.",
              "aliases": [
                "Batman II",
                "The Tomorrow Knight",
                "The second Dark Knight",
                "The Dark Knight of Tomorrow",
                "Batman Beyond"
              ],
              "place-of-birth": "Gotham City, 25th Century",
              "first-appearance": "Batman Beyond #1",
              "publisher": "DC Comics",
              "alignment": "good"
            },
            "appearance": {
              "gender": "Male",
              "race": "Human",
              "height": [
                "5'10",
                "178 cm"
              ],
              "weight": [
                "170 lb",
                "77 kg"
              ],
              "eye-color": "Blue",
              "hair-color": "Black"
            },
            "work": {
              "occupation": "-",
              "base": "21st Century Gotham City"
            },
            "connections": {
              "group-affiliation": "Batman Family, Justice League Unlimited",
              "relatives": "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"
            },
            "image": {
              "url": "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
            }
          },
          {
            "id": "70",
            "name": "Batman",
            "powerstats": {
              "intelligence": "100",
              "strength": "26",
              "speed": "27",
              "durability": "50",
              "power": "47",
              "combat": "100"
            },
            "biography": {
              "full-name": "Bruce Wayne",
              "alter-egos": "No alter egos found.",
              "aliases": [
                "Insider",
                "Matches Malone"
              ],
              "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
              "first-appearance": "Detective Comics #27",
              "publisher": "DC Comics",
              "alignment": "good"
            },
            "appearance": {
              "gender": "Male",
              "race": "Human",
              "height": [
                "6'2",
                "188 cm"
              ],
              "weight": [
                "210 lb",
                "95 kg"
              ],
              "eye-color": "blue",
              "hair-color": "black"
            },
            "work": {
              "occupation": "Businessman",
              "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
            },
            "connections": {
              "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
              "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
            },
            "image": {
              "url": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
            }
          },
          {
            "id": "71",
            "name": "Batman II",
            "powerstats": {
              "intelligence": "88",
              "strength": "11",
              "speed": "33",
              "durability": "28",
              "power": "36",
              "combat": "100"
            },
            "biography": {
              "full-name": "Dick Grayson",
              "alter-egos": "Nightwing, Robin",
              "aliases": [
                "Dick Grayson"
              ],
              "place-of-birth": "-",
              "first-appearance": "-",
              "publisher": "Nightwing",
              "alignment": "good"
            },
            "appearance": {
              "gender": "Male",
              "race": "Human",
              "height": [
                "5'10",
                "178 cm"
              ],
              "weight": [
                "175 lb",
                "79 kg"
              ],
              "eye-color": "Blue",
              "hair-color": "Black"
            },
            "work": {
              "occupation": "-",
              "base": "Gotham City; formerly Bludhaven, New York City"
            },
            "connections": {
              "group-affiliation": "Justice League Of America, Batman Family",
              "relatives": "John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)"
            },
            "image": {
              "url": "https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"
            }
          }
        ]
      }))
  
      component.getInstance().setState({
        query: 'batman'
      })
      component.getInstance().performQuery()
    })
  
    afterEach(() => api.searchHeroes.restore())  
  
    it('should call search heroes when the search request is triggered & non-empty', () => {
      // Note how this _isn’t_ a snapshot test because we’re checking whether a function was called with
      // the right arguments.
      expect(api.searchHeroes.firstCall.args[0]).toEqual({
        params: "batman"
      })
    })
  
    it('should populate the search results container when search results arrive', () => {
      // Yay, no janky async issues this time around! (see equivalent test in giphy-sample)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('failed API calls', () => {
    const component = TestRenderer.create(<Search />)
  
    beforeEach(() => {
      sinon.stub(api, 'searchHeroes')
      api.searchHeroes.returns(Promise.reject('Mock failure'))
      component.getInstance().setState({
        query: 'martha'
      })
      component.getInstance().performQuery()
    })
  
    afterEach(() => api.searchHeroes.restore())

    it('should display an alert when the API call fails', () => {
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe('Search results', () => {
  describe('API calls', () => {
    const component = TestRenderer.create(<Search />)
  
    beforeEach(() => {
      sinon.stub(api, 'getHero')
      // To manage size, we supply a mock response that contains _only_ what the app will need. This does mean
      // that we need to revise the mock response if our app starts using more (or different) data.
      api.getHero.returns(Promise.resolve({  
        "response":"success",
        "id":"69",
        "name":"Batman",
        "powerstats":{  
          "intelligence":"81",
          "strength":"40",
          "speed":"29",
          "durability":"55",
          "power":"63",
          "combat":"90"
        },
        "biography":{  
          "full-name":"Terry McGinnis",
          "alter-egos":"No alter egos found.",
          "aliases":[  
            "Batman II",
            "The Tomorrow Knight",
            "The second Dark Knight",
            "The Dark Knight of Tomorrow",
            "Batman Beyond"
          ],
          "place-of-birth":"Gotham City, 25th Century",
          "first-appearance":"Batman Beyond #1",
          "publisher":"DC Comics",
          "alignment":"good"
        },
        "appearance":{  
          "gender":"Male",
          "race":"Human",
          "height":[  
            "5'10",
            "178 cm"
          ],
          "weight":[  
            "170 lb",
            "77 kg"
          ],
          "eye-color":"Blue",
          "hair-color":"Black"
        },
        "image":{  
          "url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10441.jpg"
        }
      }))
  
      component.getInstance().selectHero('69')
    })
  
    afterEach(() => api.getHero.restore())  
  
    it('should call getHero when one of the heroes in search results is clicked', () => {
      // Note how this _isn’t_ a snapshot test because we’re checking whether a function was called with
      // the right arguments.
      console.log(api.getHero.firstCall)
      expect(api.getHero.firstCall.args[0]).toEqual({
        params: "69"
      })
    })
  
    it('should populate the selected details container when search results arrive', () => {
      // Yay, no janky async issues this time around! (see equivalent test in giphy-sample)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('failed API calls', () => {
    const component = TestRenderer.create(<Search />)
  
    beforeEach(() => {
      sinon.stub(api, 'getHero')
      api.getHero.returns(Promise.reject('Mock failure'))
      component.getInstance().selectHero('martha')
    })
  
    afterEach(() => api.getHero.restore())

    it('should display an alert when the API call fails', () => {
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe('Search details', () => {
  describe('API calls', () => {
    const component = TestRenderer.create(<Search />)
  
    beforeEach(() => {
      sinon.stub(api, 'getHero')
      // To manage size, we supply a mock response that contains _only_ what the app will need. This does mean
      // that we need to revise the mock response if our app starts using more (or different) data.
      api.getHero.returns(Promise.resolve({  
        "response":"success",
        "id":"69",
        "name":"Batman",
        "powerstats":{  
          "intelligence":"81",
          "strength":"40",
          "speed":"29",
          "durability":"55",
          "power":"63",
          "combat":"90"
        },
        "biography":{  
          "full-name":"Terry McGinnis",
          "alter-egos":"No alter egos found.",
          "aliases":[  
            "Batman II",
            "The Tomorrow Knight",
            "The second Dark Knight",
            "The Dark Knight of Tomorrow",
            "Batman Beyond"
          ],
          "place-of-birth":"Gotham City, 25th Century",
          "first-appearance":"Batman Beyond #1",
          "publisher":"DC Comics",
          "alignment":"good"
        },
        "appearance":{  
          "gender":"Male",
          "race":"Human",
          "height":[  
            "5'10",
            "178 cm"
          ],
          "weight":[  
            "170 lb",
            "77 kg"
          ],
          "eye-color":"Blue",
          "hair-color":"Black"
        },
        "image":{  
          "url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10441.jpg"
        }
      }))
  
      component.getInstance().setState({
        selectedHero: [{  
          "response":"success",
          "id":"69",
          "name":"Batman",
          "powerstats":{  
            "intelligence":"81",
            "strength":"40",
            "speed":"29",
            "durability":"55",
            "power":"63",
            "combat":"90"
          },
          "biography":{  
            "full-name":"Terry McGinnis",
            "alter-egos":"No alter egos found.",
            "aliases":[  
              "Batman II",
              "The Tomorrow Knight",
              "The second Dark Knight",
              "The Dark Knight of Tomorrow",
              "Batman Beyond"
            ],
            "place-of-birth":"Gotham City, 25th Century",
            "first-appearance":"Batman Beyond #1",
            "publisher":"DC Comics",
            "alignment":"good"
          },
          "appearance":{  
            "gender":"Male",
            "race":"Human",
            "height":[  
              "5'10",
              "178 cm"
            ],
            "weight":[  
              "170 lb",
              "77 kg"
            ],
            "eye-color":"Blue",
            "hair-color":"Black"
          },
          "image":{  
            "url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10441.jpg"
          }
        }]
      })
      component.getInstance().addHero('69')
    })
  
    afterEach(() => api.getHero.restore())  
  
    it('should call getHero when the add button in search details is clicked', () => {
      // Note how this _isn’t_ a snapshot test because we’re checking whether a function was called with
      // the right arguments.
      expect(api.getHero.firstCall.args[0]).toEqual({
        params: "69"
      })
    })
  
    it('should populate the hero team container when add button is clicked', () => {
      // Yay, no janky async issues this time around! (see equivalent test in giphy-sample)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('failed API calls', () => {
    const component = TestRenderer.create(<Search />)
  
    beforeEach(() => {
      sinon.stub(api, 'getHero')
      api.getHero.returns(Promise.reject('Mock failure'))
      component.getInstance().setState({
        selectedHero: [{"response":"error","error":"invalid id"}]

      })
      component.getInstance().addHero('23452345234')
    })
  
    afterEach(() => api.getHero.restore())

    it('should display an alert when the API call fails', () => {
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe('Hero team', () => {
  it('should remove a hero from team when trash button is clicked', () => {
    const component = ReactTestUtils.renderIntoDocument(<Search />)
    component.setState({
      team: [{
        "response": "success",
        "id": "70",
        "name": "Batman",
        "powerstats": {
          "intelligence": "100",
          "strength": "26",
          "speed": "27",
          "durability": "50",
          "power": "47",
          "combat": "100"
        },
        "biography": {
          "full-name": "Bruce Wayne",
          "alter-egos": "No alter egos found.",
          "aliases": [
            "Insider",
            "Matches Malone"
          ],
          "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
          "first-appearance": "Detective Comics #27",
          "publisher": "DC Comics",
          "alignment": "good"
        },
        "appearance": {
          "gender": "Male",
          "race": "Human",
          "height": [
            "6'2",
            "188 cm"
          ],
          "weight": [
            "210 lb",
            "95 kg"
          ],
          "eye-color": "blue",
          "hair-color": "black"
        },
        "image": {
          "url": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        }
      }]
    })
    
    component.removeHero({
      "response": "success",
      "id": "70",
      "name": "Batman",
      "powerstats": {
        "intelligence": "100",
        "strength": "26",
        "speed": "27",
        "durability": "50",
        "power": "47",
        "combat": "100"
      },
      "biography": {
        "full-name": "Bruce Wayne",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Insider",
          "Matches Malone"
        ],
        "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
        "first-appearance": "Detective Comics #27",
        "publisher": "DC Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eye-color": "blue",
        "hair-color": "black"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
      }
    })
    expect(component.state.team).toEqual([])
  })
})
