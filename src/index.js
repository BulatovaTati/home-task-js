import { refreshSimplelightbox } from './js/dom/simpleLightbox';
import {
  onSuccessSearch,
  onEndSearchPic,
  onErrorSearch,
  onInfoSearch,
} from './js/dom/notify';

import './css/styles.scss';
// Styles <<<<<<<=

import { refs } from './js/dom/refs';
const { form, gallery, load_more } = refs;

import { markupGallery, resetDomMarkup } from './js/dom/markup';
import Gallery from './js/api/fetch';
import { smoothScrolling } from './js/dom/smoothScrolling';
import arrow from './js/dom/arrow';
//Imports <<<<<<=

load_more.classList.add('is-hidden');
form.addEventListener('submit', onSubmitForm);

const NewGallery = new Gallery();

async function onSubmitForm(evt) {
  evt.preventDefault();
  load_more.classList.add('is-hidden');
  NewGallery.query = evt.currentTarget.searchQuery.value.trim();

  if (NewGallery.query === '') {
    return onInfoSearch();
  }

  NewGallery.resetPage();
  resetDomMarkup();

  try {
    const res = await NewGallery.fetchPictures();

    if (res.hits.length === 0) {
      load_more.classList.add('is-hidden');
      return onErrorSearch();
    }

    const markup = markupGallery(res.hits);
    gallery.innerHTML = markup;

    onSuccessSearch(res);
    refreshSimplelightbox();

    load_more.classList.remove('is-hidden');
  } catch (error) {
    console.log('Line 60', error);
  }
}

load_more.addEventListener('click', onLoadMore);

async function onLoadMore() {
  NewGallery.incrementPage();

  try {
    const res = await NewGallery.fetchPictures();

    if (NewGallery.page >= res.hits) {
      load_more.classList.add('is-hidden');
      return onEndSearchPic();
    }

    domMarkup(res.hits);

    smoothScrolling();
    refreshSimplelightbox();
  } catch (error) {
    console.log('Line 71', error);
  }
}

function domMarkup(resFin) {
  gallery.insertAdjacentHTML('beforeend', markupGallery(resFin));
}
