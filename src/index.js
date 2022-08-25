// import './css/styles.css';
// import { refs } from './js/refs';
// const { input, list, country_info } = refs;

// import Countries from './js/fetchCountries';
// import markuplist from './js/country-list-markup';
// import markupInfo from './js/country-info-markup';
// import debounce from 'lodash.debounce';
// let name = '';
// const DEBOUNCE_DELAY = 300;
// const newListCountries = new Countries();
// console.log('newListCountries: ', newListCountries);

// input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

// function onSearchCountry() {
//   name = input.value.trim();
//   newListCountries.resetMarkup();

//   if (name !== '') {
//     newListCountries.searchCountry = name;
//     newListCountries.fetchCountries(name).then(res => {});
//   }
// }

// // function onPropertiesCheck(info) {
// //   if (info.length === 1) {
// //     return country_info.insertAdjacentHTML('beforeend', markupInfo(info));
// //   }
// //   if (info.length >= 2) {
// //     return list.insertAdjacentHTML('beforeend', markuplist(info));
// //   }
// // }

import './css/styles.css';
import { refs } from './js/refs';
const { input, list, country_info } = refs;

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchCountries } from './js/fetchCountries';
// import addToCountryList from './js/country-list-markup';
// import addToCountryInfo from './js/country-info-markup';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const MAX_COUNT = 10;

input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(evt) {
  const name = evt.target.value.trim();
  console.log('name: ', name);

  if (!name) {
    list.innerHTML = '';
    country_info.innerHTML = '';
    return;
  }

  fetchCountries(name)
    .then(res => {
      console.log('res: ', res);
      if (res.length > MAX_COUNT) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.',
          {
            timeout: 3000,
          }
        );
        return;
      }
      showCountries(res);
    })
    .catch(error => {
      list.innerHTML = '';
      country_info.innerHTML = '';

      Notify.failure('Oops, there is no country with that name', {
        timeout: 3000,
      });
    });
}

function showCountries(country) {
  if (country.length === 1) {
    list.innerHTML = '';

    const markup = addToCountryInfo(country);
    country_info.innerHTML = markup;
  } else {
    country_info.innerHTML = '';

    const markup = addToCountryList(country);
    list.innerHTML = markup;
  }
}
// function error() {
//   list.innerHTML = '';
//   country_info.innerHTML = '';

//   Notify.failure('Oops, there is no country with that name', {
//     timeout: 3000,
//   });
// }

function addToCountryList(countries) {
  return countries
    .map(
      ({ name, flags }) =>
        `<li class="country-list__item">
        <img
          class="country-list__flag"
          src="${flags.svg}"
          alt="this is flag those country"
          width = 200
          />
        <h2 class="country-list__title">${name.official}</h2>
      </li>`
    )
    .join('');
}

function addToCountryInfo(country) {
  return country.map(
    ({ name, flags, capital, population, languages }) =>
      `
    <div class="flag__container">
        <img
          class="flag__img"
          src="${flags.svg}"
          alt="this is flag those country"
          width = 200
        />
        <h1>${name.official}</h1>
      </div>
      <ul class="country-info__desc">
        <li class="country-info__item">
          Capital:
          <span>${capital}</span>
        </li>
        <li class="country-info__item">
          Population:
          <span>${population}</span
          >
        </li>
        <li class="country-info__item">
          Languages:
          <span>${Object.values(languages)}</span
          >
        </li>
      </ul>`
  );
}
