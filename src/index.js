import './css/styles.css';
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
const { gallery, form, readMore } = refs;

import { markupGallery, onDomMarkup, resetDomMarkup } from './js/dom/markup';
import Gallery from './js/api/fetch';

const NewGallery = new Gallery();

form.addEventListener('submit', onSubmitForm);

async function onSubmitForm(evt) {
  evt.preventDefault();

  const value = evt.currentTarget.searchQuery.value.trim();
  console.log('value: ', value);

  if (!value) {
    return;
  }

  NewGallery.query = value;

  resetDomMarkup();

  try {
    const res = await NewGallery.fetchPictures();
    const resW = await matchQuery(res);

    onDomMarkup(resW);
  } catch (error) {
    console.log('aaa', error);
  }

  form.reset();
}
async function matchQuery(res) {
  if (res.data.hits.length === 0) {
    onErrorSearch();
  }
  onSuccessSearch();
  return await res;
}

function distribPer_Page() {
  return Math.ceil(NewGallery.totalHits / NewGallery.params.params.per_page);
}
