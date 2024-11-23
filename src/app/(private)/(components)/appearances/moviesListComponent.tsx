"use client"
import React, {FC} from 'react';
import {IMovieShortModel} from "@/app/(private)/models/IMovieShortModel";
import styles from "./styles/moviesList.module.css"
import {baseImageUrl} from "@/app/(private)/services/settings";
import {getSlicedGenres, truncateTextByWords} from "@/app/(private)/services/helpers";
import Link from "next/link";
import {useGenres} from "@/app/(private)/context/contextProvider";

type Props = {
    list: IMovieShortModel[];
}

//компонент для отображения фильмов списком
const MoviesListComponent:FC<Props> = ({list}) => {

    const genres = useGenres();


    return (
        <div className={styles.oneObjContainer}>
            {
                list.map((movie) => (
                    <Link href={"/movies/" + movie.id} key={movie.id} className={styles.oneObj}>
                        <img src={baseImageUrl + movie.poster_path} alt={movie.title}/>
                        <div className={styles.info}>
                            <div className={styles.blockHeader}><h3>{movie.title}</h3><p><span>Popularity:</span> <span className={styles.popularity}>{movie.popularity.toFixed(0)}</span></p></div>
                            <div className={styles.genresContainer}>{
                                getSlicedGenres(genres,movie.genre_ids).map(g => (<div key={g.id} className={styles.genre}>{g.name} </div>))
                            }</div>
                            <p>{truncateTextByWords(movie.overview, 20)}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default MoviesListComponent;