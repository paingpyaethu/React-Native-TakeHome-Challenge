import httpClient from '../RestClient/HttpClient';

export const getPokemonApi = ({currentPage}) => {
  return new Promise((resolve, reject) => {
    httpClient({
      url: `https://api.pokemontcg.io/v2/cards?pageSize=${currentPage}`,
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};
