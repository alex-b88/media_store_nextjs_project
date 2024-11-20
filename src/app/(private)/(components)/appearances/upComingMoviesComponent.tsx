import React, {FC} from 'react';
import Link from "next/link";
import {imagePath600x900} from "@/app/(private)/services/settings";
import {IMovieShortModel} from "@/app/(private)/models/IMovieShortModel";
import "./styles/upcoming-movie-styles.css"


type Props = {
    moviesSliced:IMovieShortModel[]
}

const UpComingMoviesComponent:FC<Props> = ({moviesSliced}) => {

    // const response = await apiService.moviesearch.getUpComingMovies()
    // const moviesSliced = response.results.slice(1, 8);

    return (
        <div className={"upcoming-list"}>
            <div className={"upcoming-list-header"}>
                <span>Upcoming</span><span><Link href={"/movies/top-rated"}>See all</Link></span></div>
            <div className={"upcoming-list-objects-container"}>{
                moviesSliced.map((obj) => (
                    <div key={obj.id} className={"upcoming-list-image-container"}>
                        <Link href={'/movies/' + obj.id}><img className={"main-paige-poster"} src={imagePath600x900 + obj.poster_path} alt={obj.title}/></Link>
                    </div>
                ))
            }</div>
        </div>
    );
};

export default UpComingMoviesComponent;