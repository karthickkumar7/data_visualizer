import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Prop {
    country: string;
    img: string;
}

export default function SideBarCountryCard(props: Prop) {
    const router = useRouter();

    function goToCountryDetail(country: string) {
        router.push(`./countries/${country}`);
    }

    return (
        <article
            className="group w-full h-[50px] p-2 flex overflow-hidden rounded-lg cursor-pointer hover:opacity-70"
            onClick={() => goToCountryDetail(props.country)}
        >
            <div className="w-[20%] h-[40px] flex items-center rounded-l-md">
                {props.img ? (
                    <Image src={props.img} alt="" width={35} height={10} />
                ) : (
                    ''
                )}
            </div>
            <div className="w-[80%] h-[40px] px-1 rounded-r-md flex items-center bg-white">
                <p className="text-sm group-hover:underline">
                    {props?.country}
                </p>
            </div>
        </article>
    );
}
