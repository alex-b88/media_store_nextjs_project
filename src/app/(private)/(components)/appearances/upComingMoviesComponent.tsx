import React, {FC} from 'react';
import Link from "next/link";
import {imagePath600x900} from "@/app/(private)/services/settings";
import {IMovieShortModel} from "@/app/(private)/models/IMovieShortModel";

type Props = {
    moviesSliced:IMovieShortModel[]
}

const UpComingMoviesComponent:FC<Props> = ({moviesSliced}) => {

    // const response = await apiService.moviesearch.getUpComingMovies()
    // const moviesSliced = response.results.slice(1, 8);

    return (
        <div className={"popular-list"}>
            <div className={"popular-list-small-navigation"}>
                <span>Upcoming</span><span><Link href={"/movies/top-rated"}>See all</Link></span></div>
            <div className={"popular-list-objects-container"}>{
                moviesSliced.map((obj) => (
                    <div key={obj.id} className={"popular-list-image-container"}>
                        <Link href={'/movies/' + obj.id}><img className={"main-paige-poster"} src={imagePath600x900 + obj.poster_path} alt={obj.title}/></Link>
                    </div>
                ))
            }</div>
        </div>
    );
};

export default UpComingMoviesComponent;