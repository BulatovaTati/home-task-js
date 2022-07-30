import { galleryItems } from "./gallery-items.js";

const box = document.querySelector(".gallery");

box.addEventListener("click", onBoxClick);
galleryItems.map(createItems).join("");

function createItems({ preview, original, description }) {
  return box.insertAdjacentHTML(
    "beforeend",
    `
          <a class="gallery__link" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
        </a>
    `
  );
}

function onBoxClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  instance.element().querySelector("img").src = evt.target.dataset.source;
  instance.show();
}

// 4
const instance = basicLightbox.create(`<img class="modal__image" src="" />`, {
  onShow: (instance) => {
    window.addEventListener("keydown", onEscClick);
  },
  onClose: (instance) => {
    window.removeEventListener("keydown", onEscClick);
  },
});

function onEscClick(evt) {
  if (evt.key === "Escape") {
    instance.close();
    return;
  }
}
