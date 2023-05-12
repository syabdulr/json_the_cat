// breedFetcher.js
const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, function (error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      try {
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback('Breed not found.', null);
        } else {
          const breed = data[0];
          const description = `${breed.name}: ${breed.description}`;
          callback(null, description);
        }
      } catch (parseError) {
        callback(parseError, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
