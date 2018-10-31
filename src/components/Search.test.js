import React from 'react'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import sinon from 'sinon'

import Search from './Search'

import * as api from './api'


// This test suite uses a distinct testing technique called _snapshot testing_. Go take
// a peek at the code then come back here for more commentary.
//
// Note how, with snapshot testing, you are truly dependent on that descriptive text.
// The enforcement is in the snapshot match, not a condition that is in the test code.
// This is where snapshot testing differs from traditional test-driven development:
// _It assumes that the code works initially._ This actually does line up fairly well
// with user interface development, because it tends to be easier to just “eyeball” a
// user interface first rather than write tests against it.
//
// It takes some adjustment to start “trusting” a snapshot test, just as it takes some
// adjustment to trust version control. If you want to manually check whether a snapshot
// is truly in the state that you want it to be, you can always look at the .snap file
// within the __snapshots__ folder.
//
// Handy reference:
// https://semaphoreci.com/community/tutorials/snapshot-testing-react-components-with-jest
//
it('should start with an empty search field', () => {
  const component = TestRenderer.create(<Search />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

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

describe('search button', () => {
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

  it('should update results state when clicked on with non-empty search field', () => {
    const component = ReactTestUtils.renderIntoDocument(<Search />)
    component.setState({
      query: 'Batman'
    })
    return component.performQuery().then(() => {
      expect(component.state.results).toEqual([{
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
      }])
    })
  })
})

describe('Search results', () => {
  it('should update selected hero state when a hero in results is clicked on', () => {
    const component = ReactTestUtils.renderIntoDocument(<Search />)
    component.setState({
      query: 'Batman'
    })
    return component.selectHero({
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
    }).then(() => {
      expect(component.state.selectedHero).toEqual({
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
    })
  })
})

describe('Search details', () => {
  it('should update team state when add button is clicked', () => {
    const component = ReactTestUtils.renderIntoDocument(<Search />)
    component.setState({
      query: 'Batman'
    })
    component.addHero({
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
    }).then(() => {
      expect(component.state.team).toEqual([{
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
      }])
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

describe('API calls', () => {
  const component = TestRenderer.create(<Search />)

  beforeEach(() => {
    sinon.stub(api, 'searchHeroes')
    sinon.stub(api, 'getHero')

    // To manage size, we supply a mock response that contains _only_ what the app will need. This does mean
    // that we need to revise the mock response if our app starts using more (or different) data.
    api.getHero.returns(Promise.resolve({
      "response": "success",
      "id": "hero.hero.id",
      "name": "hero.hero.name",
      "powerstats": "hero.hero.powerstats",
      "biography": "hero.hero.biography",
      "appearance": "hero.hero.appearance",
      "image": {
        "url": "hero.hero.image.url"
      }
    }))

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
    component.getInstance().selectHero()
    component.getInstance().addHero()
  })

  afterEach(() => api.searchHeroes.restore())
  afterEach(() => api.getHero.restore())

  it('should trigger a Hero search when the search button is clicked', () => {
    // Note how this _isn’t_ a snapshot test because we’re checking whether a function was called with
    // the right arguments.
    expect(api.searchHeroes.firstCall.args[0]).toEqual({
      q: "batman"
    })
  })

  it('should populate the results container when search results arrive', () => {
    // Yay, no janky async issues this time around! (see equivalent test in giphy-sample)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('failed API calls', () => {
  const component = TestRenderer.create(<Search />)

  beforeEach(() => {
    sinon.stub(api, 'searchHeroes')
    sinon.stub(api, 'getHero')

    api.searchHeroes.returns(Promise.reject('Mock failure'))
    api.getHero.returns(Promise.reject('Mock failure'))
    component.getInstance().setState({
      query: 'fail'
    })

    component.getInstance().performQuery()
    component.getInstance().selectHero()
    component.getInstance().addHero()

  })

  afterEach(() => api.searchHeroes.restore())
  afterEach(() => api.getHero.restore())

  it('should display an alert when the API call fails', () => {
    // The snapshot should contain the error div.
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})