import React, {FC} from 'react';
import {IMovieFullModel} from "@/app/(private)/models/IMovieFullModel";
import {baseImageUrl} from "@/app/(private)/services/settings";
import "./styles/moviesListCard-styles.css"
import {RuntimeConverter} from "@/app/(private)/services/helpers";
import Link from "next/link";

type Props = {
    obj: IMovieFullModel;
}


const MoviesListCardComponent:FC<Props> = ({obj}) => {

    const movieDuration = RuntimeConverter(obj.runtime);


    return (
        <div className={"oneMovieFullInfoComponent-container"}>
            <div className={"oneMovieFullInfoComponent-container-header"}>
                <h2>{obj.title}</h2>
                <p><span>{obj.vote_average ? obj.vote_average.toFixed(1):0} </span>/10</p>
            </div>
            <p className={"oneMovieFullInfoComponent-container-tagLine"}>{obj.tagline}</p>
            <div className={"duration-and-categories"}>
                <p>{movieDuration.hours}hr {movieDuration.minutes}min</p>
                <div className={"oneMovieFullInfoComponent-container-genres-list"}>
                    {
                        obj.genres.map(g => (<span key={g.id}><Link href={"/genres/" + g.name}>{g.name}</Link> </span>))
                    }
                </div>
            </div>
            <img src={baseImageUrl + obj.backdrop_path} alt={obj.title}/>
            <div className={"oneMovieFullInfoComponent-container-production-budget"}>
                <p>Budget:</p>
                <span>${obj.budget}</span>
            </div>
            <div className={"oneMovieFullInfoComponent-container-description"}>{obj.overview}</div>
            <div className={"oneMovieFullInfoComponent-container-production-companies"}>
                <p>Movie companies:</p>
                {
                    obj.production_companies.map(c => (
                        <div key={c.id}>{c.name}</div>
                    ))
                }
            </div>
            <div>Home page: {obj.homepage}</div>
            <div>Release date: {obj.release_date}</div>
            <div>Popularity: {obj.popularity}</div>
            <div>Revenue: {obj.revenue}</div>
            <div>Status: {obj.status}</div>
            <div>Vote count: {obj.vote_count}</div>
            <div>Vote average: {obj.vote_average}</div>

        </div>
    );
};

export default MoviesListCardComponent;