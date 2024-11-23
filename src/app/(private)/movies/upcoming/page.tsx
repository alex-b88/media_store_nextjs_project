"use client"
import React, {useEffect, useState} from 'react';
import {apiService} from "@/app/(private)/services/api-services";
import {IMovieShortModel} from "@/app/(private)/models/IMovieShortModel";
import MoviesListComponent from "@/app/(private)/(components)/appearances/moviesListComponent";

const UpcomingMoviesPage = () => {

    const [movieList, setMovieList] = useState<IMovieShortModel[]>([])

    useEffect(() => {
        apiService.moviesearch.getUpComingMovies().then((response) => {

            setMovieList(response.results)

        })
    }, []);

    return (
        <div>
            <MoviesListComponent list={movieList}/>
        </div>
    );
};

export default UpcomingMoviesPage;