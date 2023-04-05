function checkIfTheFirstLetterIsUppercase(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Data type not allowed')
  }

  return text.charAt(0) === text.charAt(0).toUpperCase();
}

module.exports = checkIfTheFirstLetterIsUppercase;
