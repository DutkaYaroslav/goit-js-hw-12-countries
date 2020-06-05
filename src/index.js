import api from './fetchCountries.js'
import showFullInfo from './templates/country.hbs'
import showInfo from './templates/countries.hbs'
import './styles.css';

const refs = {
  input: document.querySelector('#search'),
  result: document.querySelector('#result'),
  li: document.querySelector('.page-result_list')
};


const debounce = require('lodash.debounce');


refs.input.addEventListener('input', debounce(fn, 500));


function fn(e) {
  if (e.target.value) {
    api(refs.input.value, getData);
  }
}




// console.log(onSearch)

function getData(data) {
  if (data.length === 1) {
    showCountry(data[0])
  } else if (data.length < 10) {
    listCountry(...data)
  } else {
    errorCountry()
  }
}


function showCountry(country) {
  const markUp = showFullInfo(country)

  refs.result.insertAdjacentHTML('beforeend', markUp)
  console.log(markUp)
}


function listCountry(countriesArray) {
  const markAll = showInfo(countriesArray)
  refs.result.insertAdjacentHTML('beforeend', markAll)

  // const newResult = a => markAll.reduce((markOneCountry, el) => {
  //   markOneCountry += refs.result.insertAdjacentHTML('beforeend', el)
  //   return markOneCountry
  // }, '')

  console.log(markOneCountry)

}



// function errorCountry(notification) {

// }

document.addEventListener('keydown', deleteInfo)

function deleteInfo(e) {
  if (e.keycode === 8) {
    refs.result.removeChild(refs.li)

  }

}
