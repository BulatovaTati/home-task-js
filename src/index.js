import { refreshSimplelightbox } from './js/dom/simpleLightbox';
import {
  onSuccessSearch,
  onEndSearchPic,
  onErrorSearch,
  onInfoSearch,
} from './js/dom/notify';
import 'simplelightbox/dist/simple-lightbox.min.css';

import './css/styles.scss';
// Styles <<<<<<<=

import { refs } from './js/dom/refs';
const { form, gallery, readmore } = refs;

import { markupGallery, resetDomMarkup } from './js/dom/markup';
import Gallery from './js/api/fetch';
import { smoothScrolling } from './js/dom/smoothScrolling';
import arrow from './js/dom/arrow';
//Imports <<<<<<=

const NewGallery = new Gallery();
// Class <<<<=

form.addEventListener('submit', onSubmitForm);

function domMarkup(resFin) {
  gallery.insertAdjacentHTML('beforeend', markupGallery(resFin));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  NewGallery.query = evt.currentTarget.searchQuery.value;

  if (NewGallery.query === '') {
    return onInfoSearch();
  }

  NewGallery.resetPage();
  resetDomMarkup();
  apiRequest();
}

async function apiRequest() {
  try {
    const res = await NewGallery.fetchPictures();
    const resFin = await res.hits;

    resFin.length === 0 ? onErrorSearch() : onSuccessSearch(res);

    domMarkup(resFin);
    NewGallery.incrementPage();
    refreshSimplelightbox();

    if (res.totalHits === NewGallery.decrementPage) {
      return onEndSearchPic();
    }
  } catch (error) {
    console.log('Line 60', error);
  }
}

// scroll
const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && NewGallery.query !== '') {
      apiScroll();
    }
  });
};

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '100px',
});

observer.observe(readmore);

async function apiScroll() {
  const res = await NewGallery.fetchPictures();
  const resFin = await res.hits;

  domMarkup(resFin);
  NewGallery.incrementPage();
  refreshSimplelightbox();
  smoothScrolling();

  return resFin;
}

// function onLoarmOre() {
//   NewGallery.fetchPictures()
//     .then(data => {
//       console.log(data);
//       refreshSimplelightbox();
//       smoothScrolling();
//     })
//     .catch(console.log);
// }

// window.addEventListener('scroll', smoothScrollPage);

// async function smoothScrollPage() {
//   if (
//     document.documentElement.scrollHeight -
//       document.documentElement.scrollTop <=
//     document.documentElement.clientHeight + 1
//   ) {
//     try {
//       apiRequest();
//     } catch (error) {
//       console.log('Line 77', error);
//     }
//   }
// }
