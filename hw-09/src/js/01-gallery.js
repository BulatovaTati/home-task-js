import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const box = document.querySelector('.gallery');

galleryItems.map(createItems).join('');

function createItems({ preview, original, description }) {
  return box.insertAdjacentHTML(
    'beforeend',
    `     <a class="gallery__item" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          alt="${description}"
          />
        </a>
    `
  );
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
