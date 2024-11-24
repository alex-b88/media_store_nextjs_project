import React from 'react';
import MoviesListComponent from "@/app/components/appearances/moviesListComponent";
import PaginationComponent from "@/app/components/pagination/paginationComponent";
import styles from "../../moviesPage.module.css"

const GenreListPage= () => {
    return (
        <div className={styles.popularMoviePage}>
            <PaginationComponent/>
            <MoviesListComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default GenreListPage;