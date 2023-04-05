const maskify = require('./maskify');
const updateData = require('./update-data');

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
