# Hero Collision

A React App utilizing the [Superhero API](https://superheroapi.com) to create different teams of superheroes. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The most recent version of its guide can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Setup


From a fresh clone, run `npm install`.



## Execution

To configure the API to fetch properly, first start the relay server. If you are in the main directory, go to the components folder by typing `cd src/components` and then run `NODE_TLS_REJECT_UNAUTHORIZED=0 node relay.js`. You should get a prompt in your terminal that says `Starting super-simple HTTP relay server...`

Afterwards, to see the site locally, run `npm start` then visit `http://localhost:3000`.

## Tests

Run tests with `npm test`. View test coverage with `npm test -- --coverage`.

## Build/Deploy

Create a deployment-ready build with `npm run build`.
