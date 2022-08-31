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
const { form } = refs;

import { markupGallery, resetDomMarkup, domMarkup } from './js/dom/markup';
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
    domMarkup(markupGallery, resFin);
    onSuccessSearch(res);

    refreshSimplelightbox();

    if (res.totalHits === NewGallery.page - 1) {
      return onEndSearchPic();
    }
  } catch (error) {
    console.log('Line 60', error);
  }
}

window.addEventListener('scroll', smoothScrollPage);

async function smoothScrollPage() {
  if (
    document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight + 1
  ) {
    NewGallery.incrementPage();
    try {
      apiRequest();
    } catch (error) {
      console.log('Line 77', error);
    }
  }
}
