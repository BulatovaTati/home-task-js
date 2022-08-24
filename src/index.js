import './css/styles.css';
import { refs } from './js/refs';
const { input, list, country_info } = refs;
import Countries from './js/fetchCountries';
import markuplist from './templates/country-list-markup';
import markupInfo from './templates/country-info-markup';

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
