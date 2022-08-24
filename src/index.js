import './css/styles.css';
import { refs } from './js/refs';
const { input, list, country_info } = refs;
import Countries from './js/fetchCountries';
import markuplist from './templates/country-list-markup.hbs';
import markupInfo from './templates/country-info-markup.hbs';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const newListCountries = new Countries();
console.log('newListCountries: ', newListCountries);

input.addEventListener('input', debounce(enterValue, DEBOUNCE_DELAY));

function enterValue(evt) {
  evt.preventDefault();

  newListCountries.country = e.currentTarget.elements.country.value;

  if (newListCountries.searchCountry) {
    const name = input.value.trim();
    return newListCountries
      .fetchCountries(name)
      .then(result => console.log(result));
  }
}

// function markupCountryInfo(info) {
//   return country_info.insertAdjacentHTML(
//     'beforeend',
//     `<div class="flag-country-block">
//         <img
//           class="flag"
//           src="${flags.svg}"
//           alt="flag"
//         />
//         <h1>${name.official}</h1>
//       </div>
//       <ul class="country-info-details">
//         <li class="country-info-item">
//           <h2>Capital:</h2>
//           <span class="info-value">${capital}</span>
//         </li>
//         <li class="country-info-item">
//           <h2>Population:</h2>
//           <span class="info-value">${population}</span
//           >
//         </li>
//         <li class="country-info-item">
//           <h2>Languages:</h2>
//           <span class="info-value">${Object.values(languages)}</span
//           >
//         </li>
//       </ul>`
//   );
// }

// function AddCountryList(countryGetInfo) {
//   const markup = countryGetInfo
//     .map(item => {
//       console.log(item);

//       return `<li class="country-list-item">
//         <img
//           class="flag-list"
//           src="${item.flags.svg}"
//           alt="flag"
//           />
//         <h2 class="list-item-h2">${item.name.official}</h2>
//       </li>`;
//     })
//     .join('');

//   refs.countryList.insertAdjacentHTML('beforeend', markup);
// }
