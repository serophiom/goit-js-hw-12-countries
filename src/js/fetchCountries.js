import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function fetchCountries (name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(country => {
        if (!country.ok) {
        country.status === 404
        error({
            text: 'Can`t find country with this name. Please try another one.',
            delay: 3000,
          })
    }
        return country.json();
    });
}

export default {fetchCountries};