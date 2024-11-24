'use client'
import React, {useEffect, useState} from 'react';
import styles from "./genresComponent.module.css"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useGenres} from "@/app/context/contextProvider";



const GenresComponent = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)

    const genres = useGenres()
    const currentPath:string = usePathname()


    const handlerOnMouseEnter = () =>{
        setIsVisible(true)
    }

    const handlerOnMouseLeave = () =>{
        setIsVisible(false)
    }

    useEffect(() => {
        setIsVisible(false)
    },[currentPath])



    return (
        <div className={isVisible ? styles.genresContainerHover : styles.genresContainer} onMouseLeave={handlerOnMouseLeave} onMouseEnter={handlerOnMouseEnter}>
            <span className={styles.allGenres}>All genres</span><div className={styles.arrowDown}></div>
            <div className={isVisible ? styles.visible : styles.hidden}>
                {
                    genres.map((obj) => <div key={obj.id}><Link href={"/movies/genre/"+obj.id} className={styles.a}>{obj.name}</Link></div>)
                }
            </div>
        </div>
    );
};

export default GenresComponent;