import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';

export default function page({ params }: { params: Params }) {
    return (
        <div className="ml-[300px]">
            <p>{params.id}</p>
        </div>
    );
}
