import { galleryItems } from "./gallery-items.js";

const box = document.querySelector(".gallery");

box.addEventListener("click", onBoxClick);

galleryItems.map(createItems).join("");

// Markup
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
//library
const instance = basicLightbox.create(
  `<img class="modal__image" src="" alt="" />`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscClick);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscClick);
    },
  }
);

// closing/pressing
function onEscClick(evt) {
  if (evt.key === "Escape") {
    instance.close();
  }
}
