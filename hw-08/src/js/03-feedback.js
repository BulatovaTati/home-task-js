import Throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('form');

form.addEventListener('submit', evt => {
  evt.preventDefault();

  // const formData = new FormData(form);
  // formData.forEach((name, value) => console.log(value, '-', name));
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

form.addEventListener(
  'input',
  Throttle(evt => {
    let formData = localStorage.getItem(STORAGE_KEY);
    formData = formData ? JSON.parse(formData) : {};

    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

(function initForm() {
  let parsedData = localStorage.getItem(STORAGE_KEY);

  if (parsedData) {
    parsedData = JSON.parse(parsedData);

    Object.entries(parsedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
})();

// another ways to solve
// const formData = {};

// form.addEventListener(
//   'input',
//   Throttle(evt => {
//     formData[evt.target.name] = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//   }, 500)
// );

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   const formData = new FormData(form);

//   formData.forEach((value, name) => console.log(value, name));
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// });

// (function initForm() {
//   let parsedData = localStorage.getItem(STORAGE_KEY);

//   if (parsedData) {
//     parsedData = JSON.parse(parsedData);

//     Object.entries(parsedData).forEach(([name, value]) => {
//       formData[name] = value;
//       form.elements[name].value = value;
//     });
//   }
// })();

// .... OR
// const formData = {
//   email: '',
//   message: '',
// };

// form.addEventListener('input', Throttle(onFormData, 500));
// form.addEventListener('submit', onSubmitForm);

// // 1
// function onFormData(evt) {
//   formData[evt.target.name] = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// // 2
// function onSubmitForm(evt) {
//   const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   console.log(parsedData);

//   evt.preventDefault();
//   evt.currentTarget.reset();
//   // localStorage.removeItem(STORAGE_KEY);
// }
