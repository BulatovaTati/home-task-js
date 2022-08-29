// import axios from 'axios';
const axios = require('axios').default;
const API_KEY = '29527006-ad6e7c34d6702116665004a30';
const BASE_URL = 'https://pixabay.com/api/';
// axios.defaults.baseURL = 'https://pixabay.com/api';
// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
// };

export default class Gallery {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalHits = 0;

    this.paramsW = {
      params: {
        key: `${API_KEY}`,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: 40,
      },
    };
  }

  async fetchPictures() {
    const res = await axios.get(BASE_URL, this.paramsW);
    console.log('res: ', res);
    const total = await res.data.total;
    this.totalHits = total;

    this.responseFetch(res);
  }

  responseFetch(res) {
    if (res.ok) this.nextPage();

    return res.data;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get currentPage() {
    return this.page;
  }

  set currentPage(page) {
    this.page = page;
  }

  nextPage() {
    this.page += 1;
  }
}
