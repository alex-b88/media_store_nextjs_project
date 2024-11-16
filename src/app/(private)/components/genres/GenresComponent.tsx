import React from 'react';
import {IGenre} from "@/app/(private)/models/IGenre";
import "./genres-list-styles.css"
import {options} from "@/app/(private)/services/settings";



const GenresComponent = async () => {

    const genresList = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(res => res.json())
        .catch(err => console.error(err));


    return (
        <div className={"genres-list"}>
            {
                genresList.genres.map((obj: IGenre) => <div key={obj.id}>{obj.name}</div>)
            }
        </div>
    );
};

export default GenresComponent;