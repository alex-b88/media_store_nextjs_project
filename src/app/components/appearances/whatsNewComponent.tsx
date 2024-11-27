import React from 'react';
import "./styles/whats-new-styles.css"
import {imagePathW400} from "@/app/services/settings";
import {getReleaseDate, truncateTextByWords} from "@/app/services/helpers";
import Link from "next/link";
import {apiService} from "@/app/services/api-services";
import {IDateModel} from "@/app/models/IDateModel";

const WhatsNewComponent= async() => {

    const movie = await apiService.moviesearch.getOneMovieShort("402431");

    const shortDecription:string = truncateTextByWords(movie.overview, 20)
    const date:IDateModel = getReleaseDate(movie.release_date);

    return (
        <div className={"whats-new-block"}>
            <div className={"whats-new-block-header"}>What's New</div>
            <Link href={"/movies/" + movie.id}>
                <div className={"whats-new-block-object-container"}>
                    <img src={imagePathW400 + movie.poster_path} alt={movie.title}/>
                    <div className={"whats-new-block-object-container-overview"}>{shortDecription}</div>
                    <div className={"whats-new-block-object-container-title"}>{movie.title}</div>
                    <div className={"whats-new-block-object-container-release-date"}>{date.month} {date.day}, {date.year}</div>
                </div>
            </Link>
        </div>
    );
};

export default WhatsNewComponent;