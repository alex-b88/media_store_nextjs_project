import {imagePathW400} from "@/app/services/settings";
import "./styles/one-movie-short-styles.css"
import {RuntimeConverter} from "@/app/services/helpers";
import Link from "next/link";
import {apiService} from "@/app/services/api-services";
import {IMovieFullModel} from "@/app/models/IMovieFullModel";
import React from "react";



//компонент для отображения одного фильма, короткая версия
const OneMovieShortComponent = async() => {

    const obj:IMovieFullModel = await apiService.moviesearch.getOneMovieFull("912649");
    const movieDuration:{hours:number, minutes:number} = RuntimeConverter(obj.runtime);

    return (
        <div className={"one-movie-short-container"}>
            <div className={"one-movie-short-container__image"}>
                <img src={imagePathW400 + obj.poster_path} alt={obj.title}/>
            </div>
            <div className={"one-movie-short-container__info-container"}>
                <div className={"one-movie-short-container__info"}>
                    <div>
                        <h3>{obj.title}</h3>
                        <p className={"one-movie-short-container__info-title-and-score"}><span>{obj.vote_average?.toFixed(1)}</span><span>/10</span></p>
                    </div>
                    <div className={"cats-duration"}>
                        <span className={"cats-duration-duration"}>{movieDuration.hours}hr {movieDuration.minutes}min</span>
                        {
                            obj.genres.map(g => (<span key={g.id}><Link href={"/movies/genre/" + g.id}>{g.name}</Link></span>))
                        }
                    </div>
                    <div className={"one-movie-short-container__info-movie-description"}>{obj.overview} <Link href={'/movies/'+obj.id}><span> Check more...</span></Link></div>
                </div>
            </div>
        </div>
    );
};

export default OneMovieShortComponent;