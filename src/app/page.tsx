
import OneMovieShortComponent from "@/app/(components)/appearances/oneMovieShortComponent";
import React from 'react';
import UpComingMoviesComponent from "@/app/(components)/appearances/upComingMoviesComponent";
import PopularMoviesComponent from "@/app/(components)/appearances/popularMoviesComponent";



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