// const BASE_URL = 'https://restcountries.com/v3.1/name/';
// const properties = 'fields=name,capital,population,flags,languages';
// import { refs } from './refs';
// const { input, list, country_info } = refs;
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// export default class Countries {
//   constructor() {
//     this.searchCountry = '';
//   }

//   fetchCountries(name) {
//     return fetch(`${BASE_URL}${this.searchCountry}?${properties}`)
//       .then(result => {
//         if (!result.ok) {
//           Notify.failure('Oops, there is no country with that name');

//           throw new Error(result.status);
//         }

//         return result.json();
//       })
//       .then(data => {
//         if (data.length > 10) {
//           Notify.info(
//             'Too many matches found. Please enter a more specific name.'
//           );
//           incrementSearch();
//         }
//       })
//       .catch(error => console.log(error));
//   }

//   resetMarkup() {
//     list.innerHTML = '';
//     country_info.innerHTML = '';
//   }

//   get country() {
//     return this.searchCountry;
//   }

//   set country(newName) {
//     this.searchCountry = newName;
//   }
// }

// export function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
//   ).then(response => {
//     if (!response.ok) {
//       console.log('jjjj', response);
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

const BASE_URL = 'https://restcountries.com/v3.1/name/';
const properties = 'fields=name,capital,population,flags,languages';

const fetchCountries = name => {
  return fetch(`${BASE_URL}${name}?${properties}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

export { fetchCountries };
