import { refs } from './refs';
const { gallery } = refs;

function markupGallery(data) {
  return data
    .map(
      ({
        largeImageURL,
        tags,
        webformatURL,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
<div class="thumb">
    <a href="${largeImageURL}"
            class="gallery__item" >
    <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}"  loading="lazy"
            class="gallery__image"/>
        <div class="info">
            <p class="info-item">
            <b>Likes</b>${likes}
            </p>
            <p class="info-item">
            <b>Views</b>${views}
            </p>
            <p class="info-item">
            <b>Comments</b>${comments}
            </p>
            <p class="info-item">
            <b>Downloads</b>${downloads}
            </p>
         </div>
    </div>
    </a>
</div>`;
      }
    )
    .join('');
}

function resetDomMarkup() {
  gallery.innerHTML = '';
}

export { markupGallery, resetDomMarkup };
