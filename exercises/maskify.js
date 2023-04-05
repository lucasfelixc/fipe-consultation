function maskify(string) {
  const visiblePartString = string.slice(-4);
  const maskedPartString = string.slice(0, -4).replace(/[a-zA-Z0-9]|[\W]|_/g, '#');

  return maskedPartString + visiblePartString;
}

module.exports = maskify;
