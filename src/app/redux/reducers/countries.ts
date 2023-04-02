import { createSlice } from '@reduxjs/toolkit';
import { Country } from '@/app/types/types';
import allCountries from '../../../data/countries.json';

interface State {
    countries: Country[];
    selectedCountry: Country | null;
    searchedCountries: Country[];
    languagesSpokenCountries: Country[];
}

const initialState: State = {
    countries: allCountries as Country[],
    selectedCountry: null,
    searchedCountries: [],
    languagesSpokenCountries: [],
};

const countSlice = createSlice({
    name: 'countries',

    initialState,

    reducers: {
        selectCountry: (state, action) => {
            const splitedCountry = action.payload.split('%20');
            if (splitedCountry.length > 1) {
                action.payload = splitedCountry.join(' ');
            }
            const countryFound = state.countries.find(
                (c) => c.country === action.payload
            );
            if (countryFound) state.selectedCountry = countryFound;
        },

        searchCountry: (state, action) => {
            if (action.payload.length > 1) {
                state.searchedCountries = state.countries.filter((country) =>
                    country.country
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                );
            }
        },

        filterByLanguagesSpoken: (state, action) => {
            const countriesFilteredByLang: Country[] = state.countries.filter(
                (country) => {
                    if (country.languages && country.languages?.length) {
                        return country.languages.includes(action.payload);
                    }
                    return false;
                }
            );
            if (countriesFilteredByLang) {
                state.languagesSpokenCountries = countriesFilteredByLang;
            }
        },
    },
});

export const { selectCountry, searchCountry, filterByLanguagesSpoken } =
    countSlice.actions;

export default countSlice.reducer;
