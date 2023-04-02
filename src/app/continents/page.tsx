import ContinentCard from '@/components/clientComponents/ContinentCard';
import React from 'react';
import continents from '../../data/continents.json';

export interface Continent {
    id: number;
    name: string;
    area: number;
    population: number;
    density: number;
    countries: number;
    file_64: string;
}

export default function Continents() {
    return (
        <div className="lg:w-full flex flex-col md:ml-[300px] relative">
            {/* Continent LIST */}
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full md:w-[800px] lg:w-[1200px] h-full gap-2 p-4">
                {(continents as Continent[]).map((c) => (
                    <div
                        key={c.name}
                        className="w-[400px] md:w-[250px] h-[280px] overflow-hidden rounded-md shadow-md bg-slate-700 text-white"
                    >
                        <ContinentCard continent={c} />
                    </div>
                ))}
            </section>
        </div>
    );
}
