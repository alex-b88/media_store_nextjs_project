'use client'
import React, {useEffect, useState} from 'react';
import {IGenreModel} from "@/app/models/IGenreModel";
import "./genres-list-styles.css"
import {apiService} from "@/app/services/api-services";
import styles from "./genresComponent.module.css"
import Link from "next/link";



const GenresComponent = () => {

    const [genresList, setGenresList] = useState<IGenreModel[]>([])
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const handlerOnClick = () =>{
        const flag = !isVisible
        setIsVisible(flag)
    }

    useEffect(() => {
        const res = async() => {
            return await apiService.genres.getMovieAll().then(res => setGenresList(res))
        }
        res()
    },[])

    return (
        <div className={isVisible ? styles.genresContainerHover : styles.genresContainer} onMouseLeave={handlerOnClick} onMouseEnter={handlerOnClick}>
            <span className={styles.allGenres}>All genres</span><div className={styles.arrowDown}></div>
            <div className={isVisible ? styles.visible : styles.hidden}>
                {
                    genresList.map((obj) => <div key={obj.id}><Link href={"/movies/genre/"+obj.id} className={styles.a}>{obj.name}</Link></div>)
                }
            </div>
        </div>
    );
};

export default GenresComponent;