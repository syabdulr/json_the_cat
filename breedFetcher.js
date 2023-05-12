const request = require('request'); // Importing the request library

const breedName = process.argv[2]; // Retrieving the 'siberian' command-line argument

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; // Storing the URL for the Siberian data

request(url, function(error, response, body) {
  // Handling request errors
  if (error) {
    console.error('Request failed:', error);
  } else {
    try {
      const data = JSON.parse(body); // Parsing the response body as JSON
      // Checking if breed data is found
      if (data.length === 0) {
        console.log('Breed not found.');
      } else {
        const breed = data[0];
        console.log(`${breed.name}: ${breed.description}`); // Logging the breed name and description
      }
    } catch (parseError) {
      console.error('Error parsing response body:', parseError); // Handling error during parsing
    }
  }
});
