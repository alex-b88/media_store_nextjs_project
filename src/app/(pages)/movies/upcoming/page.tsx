"use client"
import React, {useState} from 'react';
import MoviesListComponent from "@/app/components/appearances/moviesListComponent";
import PaginationComponent from "@/app/components/pagination/paginationComponent";
import styles from "../moviesPage.module.css"

const UpcomingMoviesPage = () => {

    const [totalPages, setTotalPages] = useState<number>(0)

    const getPagesCount = (pageNumbers:number):void => {
        setTotalPages(pageNumbers)
    }

    return (
        <div className={styles.popularMoviePage}>
            <PaginationComponent pagesCount={totalPages}/>
            <MoviesListComponent getPagesCount={getPagesCount}/>
            <PaginationComponent pagesCount={totalPages}/>
        </div>
    );
};

export default UpcomingMoviesPage;