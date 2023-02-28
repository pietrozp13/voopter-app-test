import { FLIGHTS } from '../utils/constants';

export const getCitiesAirports = () => {
  return fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json')
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getFlights = () => {
  return fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json')
    .then((response) => response.json())
    .then((json) => {
      return FLIGHTS;
    })
    .catch((error) => {
      console.error(error);
    });
};
