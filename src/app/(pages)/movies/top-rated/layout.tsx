import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Top Rated movies',
    description: 'description',
    keywords: 'keywords',
}

type Props = { children: React.ReactNode }

const TopRatedLayOut = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default TopRatedLayOut