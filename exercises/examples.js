const maskify = require('./1-maskify');
const updateData = require('./2-updateData');
const getRickAndMortyCharacters = require('./3-getRickAndMortyCharacters');
const checkIfTheFirstLetterIsUppercase = require('./4-checkIfTheFirstLetterIsUppercase');

// Maskify test
console.log('--- 1 ---:', maskify('Texto teste'));

// Update data test
console.log('--- 2 ---:', updateData({
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
getRickAndMortyCharacters().then(data => console.log('--- 3 ---:', data));

// Checking if the first letter is capitalized
console.log('--- 4 ---:', checkIfTheFirstLetterIsUppercase('Teste'))
