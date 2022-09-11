import { refreshSimplelightbox } from './js/dom/simpleLightbox';
import {
  onSuccessSearch,
  onEndSearchPic,
  onErrorSearch,
  onInfoSearch,
} from './js/dom/notify';
import 'simplelightbox/dist/simple-lightbox.min.css';

import './css/styles.scss';
// Styles <<<<<<<=

import { refs } from './js/dom/refs';
const { form, gallery, readmore } = refs;

import { markupGallery, resetDomMarkup } from './js/dom/markup';
import Gallery from './js/api/fetch';
import { smoothScrolling } from './js/dom/smoothScrolling';
import arrow from './js/dom/arrow';
//Imports <<<<<<=

const options = {
  root: null,
  rootMargin: '150px',
  threshold: 1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(async entry => {
    if (entry.isIntersecting && entry.intersectionRect.bottom > 300) {
      NewGallery.incrementPage();

      try {
        const res = await NewGallery.fetchPictures();

        if (NewGallery.page >= res.hits) {
          observer.unobserve(readmore);
          return onEndSearchPic();
        }

        domMarkup(res.hits);
        refreshSimplelightbox();
        smoothScrolling();
      } catch (error) {
        console.log('line 45', error);
      }
    }
  });
}, options);

form.addEventListener('submit', onSubmitForm);

const NewGallery = new Gallery();
// Class <<<<=

async function onSubmitForm(evt) {
  evt.preventDefault();

  NewGallery.query = evt.currentTarget.searchQuery.value.trim();

  if (NewGallery.query === '') {
    return onInfoSearch();
  }

  NewGallery.resetPage();
  resetDomMarkup();

  try {
    const res = await NewGallery.fetchPictures();

    if (res.hits.length === 0) {
      return onErrorSearch();
    }

    const markup = markupGallery(res.hits);
    gallery.innerHTML = markup;
    onSuccessSearch(res);

    refreshSimplelightbox();

    observer.observe(readmore);
  } catch (error) {
    console.log('Line 60', error);
  }
}

function domMarkup(resFin) {
  gallery.insertAdjacentHTML('beforeend', markupGallery(resFin));
}

// // window.addEventListener('scroll', smoothScrollPage);

// // async function smoothScrollPage() {
// //   if (
// //     document.documentElement.scrollHeight -
// //       document.documentElement.scrollTop <=
// //     document.documentElement.clientHeight + 1
// //   ) {
// //     try {
// //       apiRequest();
// //     } catch (error) {
// //       console.log('Line 77', error);
// //     }
// //   }
// // Напиши клас Client який створює об'єкт /
// /з властивостями login email
//   / / Оголоси приватні властивості #login #email,
// //доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(NewLogin) {
//     this.#login = NewLogin;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(NewEmail) {
//     this.#email = NewEmail;
//   }
// }

// const NewClient = new Client({ login: 'fhfhhfh', email: 'dffkjhif' });
// console.log('NewClient: ', NewClient);
// console.log(NewClient.email);
// console.log(NewClient.login);
// console.log((NewClient.email = 'dd12'));
// console.log(NewClient.email);

//Напиши клас Notes, який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text priority
//Додай класу статичну властивість Priopity,
//у якій зберігатиметься об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priopity = [];
//   constructor({ text, priority }) {
//     this.items = text;
//     this.priopity = priority;
//   }
//   addNote(note) {
//     this.items.push(note);
//   }
//   updatePriority(text, newPriority) {}
// }

// const note = new Notes({ text: 'jfdhfhdsfhasifhihsaf', priopity: [] });

// note.updatePriority({ text: '111', newPriority: 'base1' });
// note.addNote({ text: '222', newPriority: 'base2' });
// note.addNote({ text: '333', newPriority: 'base3' });
// note.addNote('hshfusdhf');
// console.log('note: ', note);

// 09/09/2022 test task
// Делегування подій
// 1. Коли користувач клікає на будь-яку комірку
// із таблиці, потрібно її зробити активною - добавити клас.active
// 3. В кожному рядку кожній третій комірці задавати клас .active-third
// 2. Коли користувач клікає на іншу комірку, вона робиться активною, а всі інші стають неактивними
// 3. Після перезавантаження сторінки активна комірка зберігається

// const board = document.querySelector('.board');
// console.log('board: ', board);

// board.addEventListener('click', evt => {
//   console.dir(evt.currentTarget);
//   if (evt.target.tagName === 'TD') {
//     evt.target.classList.toggle('active');
//   }
// });
