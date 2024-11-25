"use client"
import React, {useState} from 'react';
import PaginationComponent from "@/app/components/pagination/paginationComponent";
import MoviesListComponent from "@/app/components/appearances/moviesListComponent";
import styles from "../moviesPage.module.css"

const TopRatedPage = () => {

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

export default TopRatedPage;