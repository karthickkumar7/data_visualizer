'use client';
import React, { BaseSyntheticEvent, Fragment, useState } from 'react';
import SideBarCountryCard from './clientComponents/SideBarCountryCard';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountry } from '@/app/redux/reducers/countries';
import { RootState } from '@/app/redux/store';
import Link from 'next/link';

export default function Sidebar() {
    const [countryName, setCountryName] = useState('');
    const { searchedCountries } = useSelector((s: RootState) => s.countries);
    const dispatch = useDispatch();

    function searchHandler(e: BaseSyntheticEvent) {
        dispatch(searchCountry(countryName));
        e.preventDefault();
    }

    return (
        <section className="hidden lg:block w-[20%] h-[880px] p-3 bg-slate-100">
            <Link href={'./countries'}>
                <h2 className="py-2 text-xl font-semibold capitalize cursor-pointer hover:opacity-80">
                    countries
                </h2>
            </Link>
            <div className="my-2">
                <form className="space-x-3">
                    <input
                        type="text"
                        placeholder="search"
                        value={countryName}
                        onChange={(e) => setCountryName(e.target.value)}
                        className="w-[150px] px-2 py-1 outline-none rounded focus:bg-blue-100 focus:shadow"
                    />
                    <button
                        className="px-3 py-1 rounded uppercase bg-blue-600 text-white hover:opacity-90 active:bg-blue-700"
                        onClick={searchHandler}
                    >
                        go
                    </button>
                </form>
            </div>
            <div className="w-full">
                {searchedCountries.map((country) => (
                    <Fragment key={country.country}>
                        <SideBarCountryCard
                            country={country.country}
                            img={country.flag_base64}
                        />
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
