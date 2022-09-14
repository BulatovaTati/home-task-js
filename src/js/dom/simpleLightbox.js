import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function refreshSimplelightbox() {
  let instanse = new SimpleLightbox('.gallery a');
  instanse.refresh('show.simplelightbox', function () {});
}
