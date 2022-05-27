import localStorageApi from './localstorage';
import throttle from 'lodash.throttle';

const CONTACT_FORM_LOCAL_STORAGE_KEY = 'feedback-form-state';
const contactFormEl = document.querySelector('.feedback-form');
const formData = {};

const fillContactFormElements = form => {
  const formDataFromLocalStorage = localStorageApi.load(CONTACT_FORM_LOCAL_STORAGE_KEY);
  const formElements = form.elements;

  for (const key in formDataFromLocalStorage) {
    if (formDataFromLocalStorage.hasOwnProperty(key)) {
      formElements[key].value = formDataFromLocalStorage[key];
    }
  }
};

fillContactFormElements(contactFormEl);

const onCotactFormElChange = event => {
  const { target } = event;

  const contactFormElValue = target.value;
  const contactFormElName = target.name;

  formData[contactFormElName] = contactFormElValue;

  localStorageApi.save(CONTACT_FORM_LOCAL_STORAGE_KEY, formData);
};

const onContactFormSubmit = event => {
  event.preventDefault();

  localStorageApi.remove(CONTACT_FORM_LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
};

contactFormEl.addEventListener('input', throttle(onCotactFormElChange, 500));
contactFormEl.addEventListener('submit', onContactFormSubmit);
