import axios from 'axios';

export default class Pictures {
  constructor() {
    this.API_KEY = '29527006-ad6e7c34d6702116665004a30';
    this.searchQuery = '';
    this.image_type = 'photo';
    this.orientation = 'horizontal';
    this.safesearch = true;

    this.BASE_URL = 'https://pixabay.com/api/';
    this.page = 1;
    this.per_page = 40;
  }

  async fetchPictures() {
    return await axios.get(this.BASE_URL, {
      params: {
        key: this.API_KEY,
        isSafe: this.safesearch,
        orientation: this.orientation,
        image_type: this.image_type,
        q: this.searchQuery,
        page: this.page,
        per_page: this.per_page,
      },
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(q) {
    this.searchQuery = q;
  }

  get currentPage() {
    return this.page;
  }
  set currentPage(page) {
    this.page = page;
  }
}
