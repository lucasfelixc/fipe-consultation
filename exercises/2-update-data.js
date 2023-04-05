function updateData(currentData, newDataObject) {
  if (typeof currentData !== 'object' || typeof newDataObject !== 'object') {
    throw new TypeError('Data type not allowed')
  }

  const dataUpdated = { ...currentData };

  Object.keys(newDataObject).forEach(key => {
    if (Object.keys(currentData).includes(key)) {
      Object.defineProperty(dataUpdated, key, {
        enumerable: true,
        value: newDataObject[key],
      })
    }
  });

  return dataUpdated;
}

module.exports = updateData;
