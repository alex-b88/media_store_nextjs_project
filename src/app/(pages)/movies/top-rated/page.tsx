import React from 'react';
import PaginationComponent from "@/app/components/pagination/paginationComponent";
import MoviesListComponent from "@/app/components/appearances/moviesListComponent";
import styles from "../moviesPage.module.css"

const TopRatedPage = () => {
    return (
        <div className={styles.popularMoviePage}>
            <PaginationComponent/>
            <MoviesListComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default TopRatedPage;