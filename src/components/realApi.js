
let api = 'http://localhost:4000/'
const API_KEY = '1890644901026465' // Access Token

const apiHost = host => { api = host }
const urlFor = resource => `${api}${API_KEY}/${resource}`

const HTTP_OK = 200

const throwResponseError = response => {
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const emitNativeError = error => {
  throw error
}

const statusCheck = successStatuses => response => {
  if (successStatuses.includes(response.status)) {
    return response
  } else {
    throwResponseError(response)
  }
}

const okCheck = statusCheck([HTTP_OK])

// const headers = {
//   'Content-Type': 'application/json'
// }

const paramsWithApiKey = (params) => {
  return params.params
}

// // The fetch function initiates a connection to the web service.
// // fetch returns a _promise_: an object that represents a future result.
// // Thus, the function actually returns right away. However, when the
// // anticipated result does show up, the code specifies what to do using
// // either `then` or `catch`. Both functions accept another function,
// // to be called upon a successful or failed promise, respectively.
// // Furthermore, then `then` function can be chained: its return result
// // is passed to the next `then` function as an argument. Here, the initial
// // handler converts the raw result into JSON. That JSON then goes to the
// // next handler, which does the actual work of putting the result on the
// // web page.
// //
// // The design of fetch allows this entire sequence to be rendered in a
// // _single statement_, thus obviating the need for curly braces but
// // resulting in what many will view to be a decrease in readability
// // (for those who aren’t used to functional-style programming). YMMV

const query = (resource, params) => fetch(`${urlFor(resource)}${paramsWithApiKey(params)}`)
  .then(console.log(`${urlFor(resource)}${paramsWithApiKey(params)}`))
  .then(okCheck, emitNativeError)
  .then(response => response.json())

const searchHeroes = (params) => query('search/', params)

const getHero = (params) => query('', params)
// should be http://superheroapi.com/api/access-token/search/name
export {
  apiHost,
  searchHeroes,
  getHero
}