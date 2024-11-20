import React, {FC} from 'react';
import GenresProvider from "@/app/(private)/context/genresCotext";
import {apiService} from "@/app/(private)/services/api-services";
import PopularMoviesComponent from "@/app/(private)/(components)/appearances/popularMoviesComponent";
import OneMovieShortComponent from "@/app/(private)/(components)/appearances/oneMovieShortComponent";
import UpComingMoviesComponent from "@/app/(private)/(components)/appearances/upComingMoviesComponent";
import WhatsNewComponent from "@/app/(private)/(components)/appearances/whatsNewComponent";
import TopRatedMoviesComponent from "@/app/(private)/(components)/appearances/topRatedMoviesComponent";

const MainContainer = () => {

    // const popularMoviesResponse = await apiService.moviesearch.getPopular()
    // const popularMovieFirst = popularMoviesResponse.results[0];
    // const popularMoviesSlice = popularMoviesResponse.results.slice(1, 8);
    //
    // const upComingMoviesResponse = await apiService.moviesearch.getUpComingMovies()
    // const upComingMovieFirst = upComingMoviesResponse.results[0];
    // const upComingMoviesSlice = upComingMoviesResponse.results.slice(1, 8);


    return (
         <></>
        // <div className={"content-container"}>
        //     <GenresProvider>
        //         <hr/>
        //         <div className="main-content-container">
        //             <div className={"content-container-01"}>
        //                 <PopularMoviesComponent moviesSliced={popularMoviesSlice}/>
        //                 <OneMovieShortComponent id={popularMovieFirst.id}/>
        //                 {children}
        //                 <UpComingMoviesComponent moviesSliced={upComingMoviesSlice}/>
        //             </div>
        //             <div className={"right-sidebar"}>
        //                 <WhatsNewComponent movie={upComingMovieFirst}/>
        //                 <hr/>
        //                 <TopRatedMoviesComponent/>
        //             </div>
        //         </div>
        //     </GenresProvider>
        // </div>
    );
};

export default MainContainer;