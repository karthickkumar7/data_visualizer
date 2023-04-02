'use client';
import CountryCard from '@/components/clientComponents/CountryCard';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Fragment } from 'react';

export default function Countries() {
    const { countries } = useSelector((s: RootState) => s.countries);

    return (
        <main className="p-2 grid grid-cols-1 lg:grid-cols-4 gap-4">
            {countries.map((country) => (
                <Fragment key={country.country}>
                    <CountryCard
                        country={country.country}
                        continent={country.continent}
                        img={country.flag_base64}
                        capital={country.city}
                    />
                </Fragment>
            ))}
        </main>
    );
}
