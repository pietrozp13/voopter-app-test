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

export const getFlights = (form, page) => {
  console.log('Data to request =>', form);
  return fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json')
    .then((response) => response.json())
    .then((json) => {
      // fake return form request, all data is mocked ond "FLIGHTS" constant
      return FLIGHTS;
    })
    .catch((error) => {
      console.error(error);
    });
};
