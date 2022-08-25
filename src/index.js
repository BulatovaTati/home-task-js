import './css/styles.css';
import { refs } from './js/refs';
const { input, list, country_info } = refs;

import Countries from './js/fetchCountries';
import { addToCountryInfo, addToCountryList } from './js/country-markup';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const MAX_COUNT = 10;

const newListCountries = new Countries();

input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(evt) {
  newListCountries.searchCountry = evt.target.value.trim();

  if (!newListCountries.searchCountry) {
    return newListCountries.resetMarkup(list, country_info);
  }

  newListCountries.fetchCountries().then(showCountries).catch(errorFetch);
}

function showCountries(country) {
  if (country.length > MAX_COUNT) {
    newListCountries.resetMarkup(list, country_info);

    return Notify.info(
      'Too many matches found. Please enter a more specific name.',
      {
        timeout: 1500,
      }
    );
  } else if (country.length === 1) {
    list.innerHTML = '';

    const markup = addToCountryInfo(country);
    country_info.innerHTML = markup;
  } else {
    country_info.innerHTML = '';

    const markup = addToCountryList(country);
    list.innerHTML = markup;
  }
}

function errorFetch() {
  newListCountries.resetMarkup(list, country_info);

  Notify.failure('Oops, there is no country with that name.', {
    timeout: 1500,
  });
}

// --------------------------------------------------------------------------
// V2
// import './css/styles.css';
// import { refs } from './js/refs';
// const { input, list, country_info } = refs;

// import { fetchCountries } from './js/fetchCountries';
// import { addToCountryInfo, addToCountryList } from './js/country-markup';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import debounce from 'lodash.debounce';

// const DEBOUNCE_DELAY = 300;
// const MAX_COUNT = 10;

// input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

// function onSearchCountry(evt) {
//   const name = evt.target.value.trim();

//   if (!name) {
//     clearInnerHtml();
//     return;
//   }

//   fetchCountries(name)
//     .then(res => {
//       if (res.length > MAX_COUNT) {
//         return Notify.info(
//           'Too many matches found. Please enter a more specific name.',
//           {
//             timeout: 3000,
//           }
//         );
//       }
//       showCountries(res);
//     })
//     .catch(error);
// }

// function showCountries(country) {
//   if (country.length === 1) {
//     list.innerHTML = '';

//     const markup = addToCountryInfo(country);
//     country_info.innerHTML = markup;
//   } else {
//     country_info.innerHTML = '';

//     const markup = addToCountryList(country);
//     list.innerHTML = markup;
//   }
// }

// function clearInnerHtml() {
//   list.innerHTML = '';
//   country_info.innerHTML = '';
// }

// function error() {
//   clearInnerHtml();

//   Notify.failure('Oops, there is no country with that name', {
//     timeout: 3000,
//   });
// }
