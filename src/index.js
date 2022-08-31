import { refreshSimplelightbox } from './js/dom/simpleLightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  onSuccessSearch,
  onEndSearchPic,
  onErrorSearch,
  onInfoSearch,
} from './js/dom/notify';
import './css/styles.scss';
// Styles <<<<<<<=

import { refs } from './js/dom/refs';
const { gallery, form, readMore } = refs;

import { markupGallery, resetDomMarkup } from './js/dom/markup';
import Gallery from './js/api/fetch';
import smoothScrolling from './js/dom/smoothScrolling';
//Imports <<<<<<=

const NewGallery = new Gallery();
// Class <<<<=

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  NewGallery.query = evt.currentTarget.searchQuery.value;

  if (NewGallery.query === '') {
    return onInfoSearch();
  }
  NewGallery.resetPage();
  resetDomMarkup();
  apiRequest();
  NewGallery.incrementPage();
  evt.target.reset();
}

async function apiRequest() {
  try {
    const res = await NewGallery.fetchPictures();
    console.log('res: ', res);

    const resFin = await res.hits;
    console.log('resFin: ', resFin);

    if (resFin.length === 0) {
      return onErrorSearch();
    }

    gallery.insertAdjacentHTML('beforeend', markupGallery(resFin));
    onSuccessSearch(res);
    refreshSimplelightbox();

    if (res.totalHits === NewGallery.page - 1) {
      return onEndSearchPic();
    }
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('scroll', onScroll);
async function onScroll() {
  if (
    document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight + 1
  ) {
    NewGallery.incrementPage();
    try {
      apiRequest();
    } catch (error) {
      console.log(error);
    }
  }
}
