import api from './fetchCountries.js';
import showFullInfo from './templates/country.hbs';
import showInfo from './templates/countries.hbs';
import './styles.css';
// import {
//   alert,
//   notice,
//   info,
//   success,
//   error
// } from '@pnotify/core';

import {
  alert,
  defaultModules
} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

// const myError = error({
//   text: "I'm an error message."
// });
// myError.open(true)

const refs = {
  input: document.querySelector('#search'),
  result: document.querySelector('#result'),
  li: document.querySelector('.page-result_list'),
};

const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(fn, 500));

function fn(e) {
  refs.result.innerHTML = '';
  if (e.target.value) {
    api(refs.input.value, getData);
  }
}

// console.log(onSearch)

function getData(data) {
  if (data.length === 1) {
    showCountry(data[0]);
  } else if (data.length < 10) {
    listCountry(data);
  } else {
    errorCountry();
  }
}

function showCountry(country) {
  const markUp = showFullInfo(country);

  refs.result.insertAdjacentHTML('beforeend', markUp);
}

function listCountry(countriesArray) {
  const item = countriesArray.map(all => showInfo(all)).join('');
  refs.result.insertAdjacentHTML('beforeend', item);
}

function errorCountry(notification) {
  defaultModules.set(PNotifyMobile, {});

  alert('too many results');
}
