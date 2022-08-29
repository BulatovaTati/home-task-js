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
console.log('NewGallery: ', NewGallery);

function distribPer_Page() {
  return Math.ceil(NewGallery.totalHits / NewGallery.params.params.per_page);
}
