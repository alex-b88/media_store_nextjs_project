import React from 'react';
import {apiService} from "@/app/(private)/services/api-services";


const PopularMoviesPage = async() => {

    const response = await apiService.moviesearch.getPopular()


    return (
        <div>
            {
                response.results.map((obj) => (
                    <div className={""} key={obj.id}>{}</div>
                ))
            }
        </div>
    );
};

export default PopularMoviesPage;