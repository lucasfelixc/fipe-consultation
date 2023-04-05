async function getRickAndMortyCharacters() {
  const API_URL = 'https://rickandmortyapi.com/api/character/[1, 2, 3, 4, 5]';

  const response = await fetch(API_URL);
  const data = await response.json().then(response => response.map(item => ({
    nome: item.name,
    genero: item.gender,
    avatar: item.image,
    especie: item.species,
  })));

  return data;
}

module.exports = getRickAndMortyCharacters;
