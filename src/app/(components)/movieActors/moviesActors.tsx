import React, {FC, useEffect, useState} from 'react';
import {apiService} from "@/app/services/api-services";
import styles from "./moviesActors.module.css"
import {baseImageUrl} from "@/app/services/settings";
import {ICharacterModel} from "@/app/models/ICharacterModel";
import {truncateTextByCharacters} from "@/app/services/helpers";

type Props = {
    movieId: number;
}

const MoviesActors:FC<Props> = ({movieId}) => {

    const [actingList, setActingList] = useState<ICharacterModel[]>([])


    useEffect(() => {
        const fetchCreditsByFilmId = async (movieId: number): Promise<ICharacterModel[]> => {
            const response = await apiService.credits.getCreditsByFilmId(movieId.toString())
            return response.cast;
        }
        fetchCreditsByFilmId(movieId)
            .then(res => setActingList(res.slice(0, 10)))
    }, []);

    return (
        <div className={styles.movieActorsContainer}>
            <div className={styles.actorsList}>
                {
                    actingList && actingList.map(obj => ( obj.original_name &&
                        <div className={styles.oneActorContainer} key={obj.id}>
                            <img src={baseImageUrl + obj.profile_path} alt={obj.name}/>
                            <div className={styles.actorName}>{truncateTextByCharacters(obj.original_name, 13)}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MoviesActors;