import React, {FC} from 'react';
import {IMovieShortModel} from "@/app/(private)/models/IMovieShortModel";

type Props = {
    obj: IMovieShortModel;
}

//компонент для отображения фильма полная версия

const OneMovieFullInfoComponent:FC<Props> = ({obj}) => {
    return (
        <div>
            
        </div>
    );
};

export default OneMovieFullInfoComponent;