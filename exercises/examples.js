const maskify = require('./1-maskify');
const updateData = require('./2-update-data');
const getRickAndMortyCharacters = require('./3-getRickAndMortyCharacters');

// Maskify test
console.log(maskify('Texto teste'));

// Update data test
console.log(updateData({
    name: 'name example 1',
    country: 'Brasil',
    age: 24,
    role: 'Software Engineer'
  },
  {
    name: 'name example updated',
    country: 'Japão',
    age: 34,
    mainTools: ['React', 'Next', 'TypeScript']
  }
));

// Rick and Morty request characters
getRickAndMortyCharacters().then(data => console.log(data));
