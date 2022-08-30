import './css/styles.scss';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  createSimplelightbox,
  refreshSimplelightbox,
} from './js/dom/simpleLightbox';

import {
  onSuccessSearch,
  onEndSearchPic,
  onErrorSearch,
} from './js/dom/notify';

// Styles <<<<<<<=

import { refs } from './js/dom/refs';
const { gallery, form, readMore, submitBtn } = refs;

import { markupGallery, resetDomMarkup } from './js/dom/markup';
import Gallery from './js/api/fetch';

//Imports <<<<<<=

const NewGallery = new Gallery();
// Class <<<<=

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  resetDomMarkup();
  NewGallery.query = evt.currentTarget.searchQuery.value.trim();

  NewGallery.resetPage();
  apiRequest();
  evt.target.reset();
}

async function apiRequest() {
  try {
    const res = await NewGallery.fetchPictures();
    console.log('res: ', res);

    const totalHits = Math.ceil(res.totalHits / NewGallery.per_page);

    const resFin = await res.hits;

    if (resFin.length === 0) {
      return onErrorSearch();
    }
    gallery.insertAdjacentHTML('beforeend', markupGallery(resFin));

    if (totalHits === NewGallery.page - 1) {
      return onEndSearchPic();
    }
  } catch (error) {
    console.log(error);
  }
}
