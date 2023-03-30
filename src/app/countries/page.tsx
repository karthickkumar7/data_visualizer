'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import countries from '../../data/countries.json';
import TopBar from '@/components/TopBar';

export interface Country {
    flag_base64: string;
    country: string;
    height: number;
    city: string;
    continent: string;
    currency_code: string;
    currency_name: string;
    languages: string[];
    density: number;
    population: number;
    area: number;
}

export default function Countries() {
    const [selectedCountry, setSelectedCountry] = useState<Country>(
        (countries as Country[])[0]
    );
    const router = useRouter();

    function toDetails(country: string) {
        let path = country;
        if (country.split(' ').length > 1) {
            path = country.split(' ').join('');
        }
        router.push(`./countries/${path}`);
    }

    function setSelectedCountryHandler(country: string) {
        const countryFound = (countries as Country[]).find(
            (c) => c.country === country
        );
        if (countryFound) setSelectedCountry(countryFound);
    }

    return (
        <div className="h-full lg:w-[1900px] flex flex-col md:ml-[300px] relative">
            <TopBar />

            {/* COUNTRY LIST */}
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full md:w-[800px] lg:w-[1200px] h-full gap-2 p-4">
                {(countries as Country[]).map((c) => (
                    <div
                        key={c.country}
                        className="w-[400px] md:w-[250px] h-[200px] p-2 rounded-md shadow-md bg-slate-100"
                    >
                        <div
                            className="cursor-pointer hover:opacity-70"
                            onClick={() => setSelectedCountryHandler(c.country)}
                        >
                            {c.flag_base64 ? (
                                <Image
                                    src={c.flag_base64}
                                    alt="country_image"
                                    width={80}
                                    height={50}
                                />
                            ) : (
                                <Image
                                    src={'/images/image_not_found.png'}
                                    alt="country_image"
                                    width={50}
                                    height={20}
                                />
                            )}
                        </div>

                        <div className="divide-y">
                            <h4
                                className="text-lg font-semibold hover:underline underline-offset-2 cursor-pointer"
                                onClick={() => toDetails(c.country)}
                            >
                                {c.country}
                            </h4>
                            <p className="text-sm capitalize">
                                <span className="font-semibold">capital</span> :{' '}
                                {c.city ? c.city : 'not found'}
                            </p>
                            <p className="text-sm capitalize">
                                <span className="font-semibold">
                                    population
                                </span>{' '}
                                :{' '}
                                {c.population
                                    ? c.population?.toLocaleString()
                                    : 'not found'}
                            </p>
                            <p className="text-sm capitalize">
                                <span className="font-semibold">area</span> :{' '}
                                {c.area ? c.area : 'not found'}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* SIDEBAR SELECTED COUNTRY */}
            <section className="right-[30px] top-[115px] fixed rounded-lg overflow-hidden">
                <div className="w-[350px] min-h-[600px] p-4 bg-slate-100">
                    <div className="p-4 mb-4 border-b-2">
                        {selectedCountry.flag_base64 ? (
                            <Image
                                src={selectedCountry.flag_base64}
                                alt="country_image"
                                width={200}
                                height={50}
                            />
                        ) : (
                            <Image
                                src={'/images/image_not_found.png'}
                                alt="country_image"
                                width={50}
                                height={20}
                            />
                        )}
                    </div>
                    <div className="font-semibold">
                        <h2>
                            Name :{' '}
                            <span className="font-bold">
                                {selectedCountry.country}
                            </span>
                        </h2>
                        <p>
                            Area :{' '}
                            {selectedCountry.area ? (
                                <span className="font-bold">
                                    {selectedCountry.area?.toLocaleString() +
                                        'km'}
                                </span>
                            ) : (
                                'not found'
                            )}
                            <sup>2</sup>
                        </p>
                        <p>
                            City :{' '}
                            <span className="font-bold">
                                {selectedCountry.city}
                            </span>
                        </p>
                        <p>
                            Continent :{' '}
                            <span className="font-bold">
                                {selectedCountry.continent}
                            </span>
                        </p>
                        <p>
                            Currency code :{' '}
                            <span className="font-bold">
                                {selectedCountry.currency_code}
                            </span>
                        </p>
                        <p>Currency name : {selectedCountry.currency_name}</p>
                        <p>
                            Languages :{' '}
                            <span className="text-xs ml-[40px]">
                                {selectedCountry.languages.map((lang) => (
                                    <li key={lang} className="list-decimal">
                                        {lang}
                                    </li>
                                ))}
                            </span>
                        </p>
                        <p>Continent : {selectedCountry.continent}</p>
                        <p>
                            Population density :{' '}
                            <span className="font-bold">
                                {selectedCountry.density} p/km <sup>2</sup>
                            </span>
                        </p>
                        <p>
                            Population :{' '}
                            {selectedCountry.population
                                ? selectedCountry.population?.toLocaleString()
                                : 'not found'}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
