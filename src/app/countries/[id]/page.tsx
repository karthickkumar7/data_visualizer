'use client';
import {
    filterByLanguagesSpoken,
    selectCountry,
} from '@/app/redux/reducers/countries';
import { RootState } from '@/app/redux/store';
import CountryCard from '@/components/clientComponents/CountryCard';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function CountryDetail({ params }: { params: Params }) {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const { selectedCountry, languagesSpokenCountries } = useSelector(
        (s: RootState) => s.countries
    );
    const dispatch = useDispatch();

    function filterCountriesByLangHandler(language: string) {
        setSelectedLanguage(language);
        dispatch(filterByLanguagesSpoken(language));
    }

    useEffect(() => {
        dispatch(selectCountry(params.id));
    }, []);

    return (
        <main className="w-full h-full flex">
            <div className="w-1/2 p-4 text-lg">
                <div className="w-[500px] h-[300px] flex items-center">
                    {selectedCountry?.flag_base64 ? (
                        <Image
                            src={selectedCountry?.flag_base64}
                            alt=""
                            width={300}
                            height={100}
                        />
                    ) : (
                        'loading...'
                    )}
                </div>
                <div className="py-4 divide-y-2 space-y-2">
                    <h2 className="text-xl font-semibold">
                        {selectedCountry?.country}
                    </h2>
                    <p>
                        Area :{' '}
                        <span className="font-semibold">
                            {selectedCountry?.area || 'not found'} sqkm
                        </span>
                    </p>
                    <p>
                        Continent :{' '}
                        <span className="font-semibold">
                            {selectedCountry?.continent || 'not found'}
                        </span>
                    </p>
                    <p>
                        Population :{' '}
                        <span className="font-semibold">
                            {selectedCountry?.population || 'not found'}
                        </span>
                    </p>
                    <div className="max-w-[500px]">
                        <p>Languages spoken</p>
                        <ul className="flex flex-wrap">
                            {selectedCountry?.languages?.map((language) => (
                                <li
                                    key={language}
                                    className="px-2 py-1 m-2 rounded bg-blue-600 text-white hover:bg-blue-500 duration-200 cursor-pointer"
                                    onClick={() =>
                                        filterCountriesByLangHandler(language)
                                    }
                                >
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-4">
                {selectedLanguage && (
                    <>
                        <h4 className="text-xl font-semibold">
                            countries speaking {selectedLanguage}
                        </h4>
                        <section className="grid grid-cols-2 gap-1 p-1 ">
                            {languagesSpokenCountries.map((country) => (
                                <Fragment key={country.country}>
                                    <CountryCard
                                        country={country.country}
                                        capital={country.city}
                                        continent={country.continent}
                                        img={country.flag_base64}
                                    />
                                </Fragment>
                            ))}
                        </section>
                    </>
                )}
            </div>
        </main>
    );
}
