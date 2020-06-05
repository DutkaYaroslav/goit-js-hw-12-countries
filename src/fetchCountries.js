const URL = 'https://restcountries.eu/rest/v2/name/';


export default function fetchCountries(search, callback) {

  fetch(URL + search)
    .then(response => response.json())
    .then(d => callback(d));
}
