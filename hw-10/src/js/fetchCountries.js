const BASE_URL = 'https://restcountries.com/v3.1/name';
const properties = 'fields=name,capital,population,flags,languages';

export default class Countries {
  constructor() {
    this.searchCountry = '';
  }

  fetchCountries() {
    return fetch(`${BASE_URL}/${this.searchCountry}?${properties}`).then(
      this.responseFetch
    );
  }

  responseFetch(res) {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  }

  resetMarkup(list, country_info) {
    list.innerHTML = '';
    country_info.innerHTML = '';
  }

  get country() {
    return this.searchCountry;
  }

  set country(newCountry) {
    this.searchCountry = newCountry;
  }
}

// // V2 ----------------------------------------------------------------------------
// const BASE_URL = 'https://restcountries.com/v3.1/name/';
// const properties = 'fields=name,capital,population,flags,languages';

// const fetchCountries = name => {
//   return fetch(`${BASE_URL}${name}?${properties}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// };

// export { fetchCountries };
