import { galleryItems } from './gallery-items.js';
// Change code below this line
 
const box = document.querySelector('.gallery');
box.addEventListener('click', onBoxClick);
 
const elem = galleryItems.map(createItems).join('');
// 1
function createItems ({preview, original, description})  {
    return box.insertAdjacentHTML("beforeend", ` 
          <a class="gallery__link" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          data-source="${original}" 
          alt="${description}" 
          />
        </a>
    ` );
 
}
//  2
function onBoxClick(evt) {
    evt.preventDefault();
}
//  2
const instance = basicLightbox.create(
    document.querySelector
)

instance.show()