export function AddCountryList(countryGetInfo) {
  const markup = countryGetInfo
    .map(item => {
      console.log(item);

      return `<li class="country-list-item">
        <img
          class="flag-list"
          src="${item.flags.svg}"
          alt="flag"
          />
        <h2 class="list-item-h2">${item.name.official}</h2>
      </li>`;
    })
    .join('');

  refs.countryList.insertAdjacentHTML('beforeend', markup);
}
