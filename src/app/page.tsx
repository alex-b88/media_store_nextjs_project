
import OneMovieShortComponent from "@/app/(private)/(components)/appearances/oneMovieShortComponent";
import React from 'react';
import UpComingMoviesComponent from "@/app/(private)/(components)/appearances/upComingMoviesComponent";
import PopularMoviesComponent from "@/app/(private)/(components)/appearances/popularMoviesComponent";



const Home = () => {

    return (
        <>
            <PopularMoviesComponent/>
            <OneMovieShortComponent/>
            <UpComingMoviesComponent/>
        </>
    );
};

export default Home;