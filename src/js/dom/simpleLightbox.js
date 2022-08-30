import SimpleLightbox from 'simplelightbox';

export function refreshSimplelightbox() {
  let instanse = new SimpleLightbox('.gallery a');
  instanse.refresh('show.simplelightbox', function () {});
}
