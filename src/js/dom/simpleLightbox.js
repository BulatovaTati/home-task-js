import SimpleLightbox from 'simplelightbox';

function createSimplelightbox() {
  let instanse = new SimpleLightbox('.gallery a');
  instanse.on('show.simplelightbox', function () {});
}

function refreshSimplelightbox() {
  let instanse = new SimpleLightbox('.gallery a');
  instanse.refresh('show.simplelightbox', function () {});
}

export { createSimplelightbox, refreshSimplelightbox };
