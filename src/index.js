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

const options = {
  root: null,
  rootMargin: '150px',
  threshold: 1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(async entry => {
    if (entry.isIntersecting && entry.intersectionRect.bottom > 300) {
      NewGallery.incrementPage();

      try {
        const res = await NewGallery.fetchPictures();

        if (NewGallery.page >= res.hits) {
          observer.unobserve(readmore);
          return onEndSearchPic();
        }

        domMarkup(res.hits);
        refreshSimplelightbox();
        smoothScrolling();
      } catch (error) {
        console.log('line 45', error);
      }
    }
  });
}, options);

form.addEventListener('submit', onSubmitForm);

const NewGallery = new Gallery();
// Class <<<<=

async function onSubmitForm(evt) {
  evt.preventDefault();

  NewGallery.query = evt.currentTarget.searchQuery.value.trim();

  if (NewGallery.query === '') {
    return onInfoSearch();
  }

  NewGallery.resetPage();
  resetDomMarkup();

  try {
    const res = await NewGallery.fetchPictures();

    if (res.hits.length === 0) {
      return onErrorSearch();
    }

    const markup = markupGallery(res.hits);
    gallery.innerHTML = markup;
    onSuccessSearch(res);

    refreshSimplelightbox();

    observer.observe(readmore);
  } catch (error) {
    console.log('Line 60', error);
  }
}

function domMarkup(resFin) {
  gallery.insertAdjacentHTML('beforeend', markupGallery(resFin));
}

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
