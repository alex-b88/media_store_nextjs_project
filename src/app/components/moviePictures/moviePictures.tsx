import React, {FC, useEffect, useState} from 'react';
import styles from "./moviePictures.module.css";
import {baseImageUrl} from "@/app/services/settings";
import {IImagesOfMovieModel} from "@/app/models/IImagesOfMovieModel";
import {apiService} from "@/app/services/api-services";

type Props = {
    movieId: number;
}

const MoviePictures:FC<Props> = ({movieId}) => {

    const [picsList, setPicsList] = useState<IImagesOfMovieModel>()

    useEffect(() => {
        const fetchCreditsByFilmId = async (movieId: number): Promise<IImagesOfMovieModel> => {
            return  await apiService.credits.getMoviePictures(movieId.toString())
        }
        fetchCreditsByFilmId(movieId)
            .then(res => setPicsList(res))
    }, []);
    if(picsList && picsList.backdrops.length > 12){
        picsList.backdrops = picsList.backdrops.slice(0,12)
    }
    return (
        <div className={styles.moviePicturesContainer}>
            {
                picsList && picsList.backdrops.map(obj => (
                    <img src={baseImageUrl+obj.file_path} alt={obj.file_path} key={obj.file_path}/>
                ))
            }
        </div>
    );
};

export default MoviePictures;