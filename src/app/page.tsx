
import TopRatedMoviesComponent from "@/app/(private)/(components)/appearances/topRatedMoviesComponent";
import OneMovieShortComponent from "@/app/(private)/(components)/appearances/oneMovieShortComponent";
import React from 'react';
import {apiService} from "@/app/(private)/services/api-services";
import WhatsNewComponent from "@/app/(private)/(components)/appearances/whatsNewComponent";
import PopularMoviesComponent from "@/app/(private)/(components)/appearances/popularMoviesComponent";
import UpComingMoviesComponent from "@/app/(private)/(components)/appearances/upComingMoviesComponent";



const Home = async () => {

    const popularMoviesResponse = await apiService.moviesearch.getPopular()
    const popularMovieFirst = popularMoviesResponse.results[0];
    const popularMoviesSlice = popularMoviesResponse.results.slice(1, 8);

    const upComingMoviesResponse = await apiService.moviesearch.getUpComingMovies()
    const upComingMovieFirst = upComingMoviesResponse.results[0];
    const upComingMoviesSlice = upComingMoviesResponse.results.slice(1, 8);

    return (
        <div className="main-content-container">
            <div className={"content-container-01"}>
                <PopularMoviesComponent moviesSliced={popularMoviesSlice}/>
                <OneMovieShortComponent id={popularMovieFirst.id}/>
                <UpComingMoviesComponent moviesSliced={upComingMoviesSlice}/>
            </div>
            <div className={"right-sidebar"}>
                <WhatsNewComponent movie={upComingMovieFirst}/>
                <hr/>
                <TopRatedMoviesComponent/>
            </div>
        </div>
    );
};

export default Home;