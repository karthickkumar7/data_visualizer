'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface CountryProp {
    country: string;
    continent: string;
    capital: string;
    img: string;
}

export default function CountryCard(prop: CountryProp) {
    const router = useRouter();

    function goToCountryDetailsPage() {
        router.push(`./countries/${prop.country}`);
    }

    return (
        <article className="h-[200px] flex flex-col p-2 rounded-md shadow-md overflow-hidden bg-white hover:sahdow-xl">
            <div className="w-full h-[50%]">
                {prop.img && (
                    <Image
                        src={prop?.img}
                        alt=""
                        width={50}
                        height={50}
                        className="w-full h-[90px] hover:brightness-[80%] cursor-pointer"
                    />
                )}
            </div>
            <div className="w-full h-[50%] px-2 py-1 text-sm">
                <h4
                    className="font-semibold cursor-pointer hover:underline underline-offset-2"
                    onClick={goToCountryDetailsPage}
                >
                    {prop?.country}
                </h4>
                <p>capital : {prop?.capital}</p>
                <p>continent : {prop?.continent}</p>
            </div>
        </article>
    );
}
