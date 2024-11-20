import React, {FC} from 'react';
import "./styles/whats-new-styles.css"
import {IMovieShortModel} from "@/app/(private)/models/IMovieShortModel";
import {imagePathW400} from "@/app/(private)/services/settings";
import {truncateTextByWords} from "@/app/(private)/services/helpers";

type Props = {
    movie: IMovieShortModel;
}

const WhatsNewComponent:FC<Props> = ({movie}) => {

    const shortDecription = truncateTextByWords(movie.overview, 20)

    return (
        <div className={"whats-new-block"}>
            <div className={"whats-new-block-header"}>What's New</div>
            <div className={"whats-new-block-object-container"}>
                <img src={imagePathW400 + movie.poster_path} alt={movie.title}/>
                <div className={"whats-new-block-object-container-overview"}>{shortDecription}</div>
            </div>
        </div>
    );
};

export default WhatsNewComponent;