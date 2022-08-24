const BASE_URL = 'https://restcountries.com/v3.1/name/';
const properties = 'fields=name,capital,population,flags,languages';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default class Countries {
  constructor() {
    this.searchCountry = '';
    this.page = 1;
    this.info = '';
  }

  fetchCountries(name) {
    return fetch(`${BASE_URL}${this.searchCountry}?${properties}`)
      .then(result => {
        if (!result.ok) {
          Notify.failure('Oops, there is no country with that name');
          list.innerHTML = '';
          country_info.innerHTML = '';

          throw new Error(result.status);
        }

        return result.json();
      })
      .then(data => {
        if (data.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );

          incrementSearch();
          this.info = data;
          return this.info;
        }
      })
      .catch(error => console.log(error));
  }
  incrementSearch() {
    this.page += 1;
  }
  get country() {
    return this.searchCountry;
  }

  set country(newName) {
    this.searchCountry = newName;
  }
}
