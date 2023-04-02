'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Continent } from '../../app/continents/page';
import Image from 'next/image';

export default function ContinentCard({ continent }: { continent: Continent }) {
    const router = useRouter();

    return (
        <>
            <div className="w-full h-[150px] flex justify-center cursor-pointer hover:opacity-70">
                {continent.file_64 ? (
                    <Image
                        src={continent.file_64}
                        alt="Continent_image"
                        width={50}
                        height={50}
                        className="w-[200px] object-cover"
                    />
                ) : (
                    <Image
                        src={'/images/image_not_found.png'}
                        alt="Continent_image"
                        width={50}
                        height={20}
                    />
                )}
            </div>

            <div className="h-[150px] w-full p-4">
                <h4
                    className="text-lg font-semibold mb-2 hover:underline underline-offset-2 cursor-pointer"
                    onClick={() =>
                        router.push(`./continents/${String(continent.id)}`)
                    }
                >
                    {continent.name}
                </h4>
                <p className="text-sm capitalize">
                    area :{' '}
                    <span className="font-semibold">
                        {continent.area.toLocaleString()}
                    </span>
                </p>
                <p className="text-sm capitalize">
                    population :{' '}
                    <span className="font-semibold">
                        {continent.population?.toLocaleString()}
                    </span>
                </p>
            </div>
        </>
    );
}
