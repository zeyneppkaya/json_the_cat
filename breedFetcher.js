const request = require('request');
const arg = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (err, res, body) => {
  if (err) {
    console.log(err);
  }
  if (arg) {
    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(typeof data);
  }
  if (!arg) {
    console.log('Breed does not exist');
  }
});

