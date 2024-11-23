import React from 'react';
import Head from "next/head";


type Props = {
    title:string;
    description:string;
    children: React.ReactNode
}

const OneMovieFullLayOut = ({title, description, children}: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Head>
            <main>
                {children}
            </main>
        </>
    );
};

export default OneMovieFullLayOut