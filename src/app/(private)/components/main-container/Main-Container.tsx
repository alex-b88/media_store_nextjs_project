import React from 'react';
import PopularMoviesComponent from "@/app/(private)/components/popular/PopularMoviesComponent";

const MainContainer = () => {
    return (
        <div className={"main-container"}>
            <hr/>
            <PopularMoviesComponent/>
        </div>
    );
};

export default MainContainer;