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

// readMore.addEventListener('click', {});

import InfiniteScroll from 'infinite-scroll';

// var unsplashID =
//   '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';

const infScroll = new InfiniteScroll('.gallery', {
  responseType: 'text',
  history: false,
  path() {
    return `https://newsapi.org/v2/everything?q=bitcoin&apiKey=bb47a995514a49758140b073ef1103f5`;
  },
});

infScroll.loadNextPage();

infScroll.on('load', (response, path) => {
  console.log(JSON.parse(response));

  // тут по шаблну сделали строку с тегами
  // потом кинули в фрагмент
  // фрагмент передали в infScroll.appendItems(фоагмент)
});

// const markup = '<p>qweqweqwe</p>';
// const fragment = new DocumentFragment();
// const d = document.createElement('div');
// fragment.innerHTML = markup;
// console.log(fragment);

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && NewGallery.query !== '') {
      // console.log('Пора грузить еще статьи' + Date.now());
      NewGallery.fetchPictures().then(articles => {
        markupGallery(articles);
        NewGallery.incrementPage();
      });
    }
  });
};
const sentinel = document.querySelector('#sentinel');
const observer = new IntersectionObserver(onEntry, {
  rootMargin: '150px',
});
observer.observe(sentinel);
