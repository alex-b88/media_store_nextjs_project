import React from 'react';
import "./styles/whats-new-styles.css"
import {imagePathW400} from "@/app/(private)/services/settings";
import {getReleaseDate, truncateTextByWords} from "@/app/(private)/services/helpers";
import Link from "next/link";
import {apiService} from "@/app/(private)/services/api-services";

const WhatsNewComponent= async() => {

    const movie = await apiService.moviesearch.getOneMovieShort("402431");

    const shortDecription = truncateTextByWords(movie.overview, 20)
    const date = getReleaseDate(movie.release_date);

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