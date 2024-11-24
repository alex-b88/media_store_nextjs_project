
import OneMovieShortComponent from "@/app/(components)/appearances/oneMovieShortComponent";
import React from 'react';
import UpComingMoviesComponent from "@/app/(components)/appearances/upComingMoviesComponent";
import PopularMoviesComponent from "@/app/(components)/appearances/popularMoviesComponent";
import MoviesProvidersComponent from "@/app/(components)/providers/moviesProvidersComponent";



const Home = () => {

    return (
        <>
            <PopularMoviesComponent/>
            <OneMovieShortComponent/>
            <UpComingMoviesComponent/>
            <MoviesProvidersComponent/>
        </>
    );
};

export default Home;