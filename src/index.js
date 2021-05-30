import './sass/main.scss';
import API from '../src/js/fetchCountries.js';
import countryCardTpl from '../src/templates/country-card.hbs';
import countriesListCardTpl from '../src/templates/countries-card.hbs';
import { error } from '@pnotify/core';
// import '@pnotify/core/dist/Pnotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

const debounce = require('lodash.debounce');
const refs = {
   inputRef: document.querySelector('.input'),
   cardRef: document.querySelector('.card'),
}

refs.inputRef.addEventListener('input', debounce(onInputSubmit, 500));

function onInputSubmit(event) {
    event.preventDefault();
    const inputRefValue = refs.inputRef.value.trim();
    API.fetchCountries(inputRefValue).then(markUpSearchResult);
}
    function markUpSearchResult(country) {
        refs.cardRef.innerHTML = '';
        
        if (country.length === 1) {
            const markUp = countryCardTpl(country);
            refs.cardRef.innerHTML = markUp;
        } else

            if (country.length >= 2 && country.length <= 10) {
                const markUpCountriesList = countriesListCardTpl(country);
                refs.cardRef.innerHTML = markUpCountriesList;
                return;
            } else
        
                if (country.length > 10) {
                    error({
                        text: 'Too many matches found. Please enter a more specific query!',
                        delay: 3000,
                    });
                }
        return;
    }