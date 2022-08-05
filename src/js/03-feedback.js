import Throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const formData = {
  email: '',
  message: '',
};

refs.form.addEventListener('input', Throttle(onFormData, 500));
refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

(function dataValues() {
  try {
    refs.input.value = formData.email;
    refs.textarea.value = formData.message;
  } catch (error) {
    console.log('Error formData ', formData);
  }
});
