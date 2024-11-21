
import OneMovieShortComponent from "@/app/(private)/(components)/appearances/oneMovieShortComponent";
import React from 'react';
import UpComingMoviesComponent from "@/app/(private)/(components)/appearances/upComingMoviesComponent";



const Home = () => {

    return (
        <>
            <OneMovieShortComponent/>
            <UpComingMoviesComponent/>
        </>
    );
};

export default Home;