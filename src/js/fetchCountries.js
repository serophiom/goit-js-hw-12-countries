// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/Pnotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

function fetchCountries (name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(country => {
        if (!country.ok) {
        country.status === 404
        ? error({
            text: 'Sorry, we can`t find entered name of country. Please try to change inputed name.',
            delay: 3500,
          })
        : error({
            text: 'Sorry, it can be issues with server.',
            delay: 3500,
          });
    }
   
        return country.json();
    });
}

export default {fetchCountries};