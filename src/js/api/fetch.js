import axios from 'axios';

const API_KEY = '29527006-ad6e7c34d6702116665004a30';
const BASE_URL = 'https://pixabay.com/api/';

export default class Gallery {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
  }

  async fetchPictures() {
    const res = await axios.get(BASE_URL, {
      params: {
        key: `${API_KEY}`,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: this.per_page,
      },
    });

    return res.data;
  }
  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// const axios = require('axios').default;
// axios.defaults.baseURL = 'https://pixabay.com/api';
// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
// };
