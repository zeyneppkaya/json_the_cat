const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
    const data = JSON.parse(body);
    if (err) {
      callback(err, null);
      return;
    }
    if (breedName) {
      callback(null, data[0].description.trim());
    }
    if (!breedName) {
      callback(null, 'Breed does not exist');
    }
  });
};

module.exports = { fetchBreedDescription };