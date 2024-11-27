"use client"
import React, {FC, useEffect, useState} from 'react';
import {IMovieShortModel} from "@/app/models/IMovieShortModel";
import styles from "./styles/moviesList.module.css"
import {baseImageUrl} from "@/app/services/settings";
import {getSlicedGenres, truncateTextByWords} from "@/app/services/helpers";
import Link from "next/link";
import {useGenres} from "@/app/context/contextProvider";
import {apiService} from "@/app/services/api-services";
import {usePathname, useSearchParams} from "next/navigation";
import {IGenreModel} from "@/app/models/IGenreModel";

type Props = {
    getPagesCount: (pageNumbers: number) => void;
}

//компонент для отображения фильмов списком
const MoviesListComponent:FC<Props> = ({getPagesCount}) => {

    const genres:IGenreModel[] = useGenres();
    const [list, setList] = useState<IMovieShortModel[]>([])
    // const [path, setPath] = useState<string>()
    const pathname:string = usePathname()
    const cat:string | undefined = pathname.split('/').pop()

    const searchParams = useSearchParams()
    const pageNum = searchParams.get('page') || '1';


    useEffect(() => {
            // setPath(pageNum)

            if (pathname.includes('genre') && cat !== undefined) {
                apiService.moviesearch.getByGenre(cat, pageNum).then((response) => {
                    setList(response.results)
                    getPagesCount(response.total_pages)
                })
            }
            else{
                switch (cat){
                    case 'popular':{
                        apiService.moviesearch.getPopular(pageNum).then((response) => {
                            setList(response.results)
                            getPagesCount(response.total_pages)
                        })
                        break;
                    }
                    case 'upcoming':{
                        apiService.moviesearch.getUpComingMovies(pageNum).then((response) => {
                            setList(response.results)
                            getPagesCount(response.total_pages)
                        })
                        break;
                    }
                    case 'top-rated':{
                        apiService.moviesearch.getTopRatedThisWeek(pageNum).then((response) => {
                            setList(response.results)
                            getPagesCount(response.total_pages)
                        })
                        break;
                    }
                }
            }
    }, [pageNum]);

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