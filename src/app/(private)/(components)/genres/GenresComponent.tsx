import React from 'react';
import {IGenreModel} from "@/app/(private)/models/IGenreModel";
import "./genres-list-styles.css"
import {apiService} from "@/app/(private)/services/api-services";



const GenresComponent = async () => {

    return (
        <div className={"genres-list"}>
            <span>genres</span>
            <ul>
                {
                    apiService.genres.getMovieAll().then(res =>
                        res.map((obj: IGenreModel) => (

                            <li key={obj.id}><span>{obj.name}</span></li>

                        )))
                }
            </ul>
        </div>
    );
};

export default GenresComponent;