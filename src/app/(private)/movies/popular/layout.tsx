import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Popular movies',
    description: 'description',
    keywords: 'keywords',
}

type Props = { children: React.ReactNode }

const MoviesLayOut = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default MoviesLayOut