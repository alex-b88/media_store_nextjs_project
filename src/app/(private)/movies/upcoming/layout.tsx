import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Upcoming movies',
    description: 'description',
    keywords: 'keywords',
}

type Props = { children: React.ReactNode }

const upComing = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default upComing