// index.js
const { fetchBreedDescription } = require('./breedFetcher'); // Importing the fetchBreedDescription function from breedFetcher.js

const breedName = process.argv[2]; // Retrieving the command-line argument for the breed name

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error); // Logging the error if it exists
  } else {
    console.log(desc); // Logging the breed description
  }
});