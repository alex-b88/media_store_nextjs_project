import React, {FC} from 'react';
import {IMovieShortModel} from "@/app/(private)/models/IMovieShortModel";

type Props = {
    list: IMovieShortModel[];
}

//компонент для отображения фильмов списком
const ListOfMovies:FC<Props> = ({list}) => {
    return (
        <div>

        </div>
    );
};

export default ListOfMovies;