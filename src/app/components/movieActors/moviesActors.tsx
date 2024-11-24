import React, {FC, useEffect, useState} from 'react';
import {apiService} from "@/app/services/api-services";
import styles from "./moviesActors.module.css"
import {baseImageUrl} from "@/app/services/settings";
import {ICharacterModel} from "@/app/models/ICharacterModel";
import {truncateTextByCharacters} from "@/app/services/helpers";
import noAvatarImage from '../../images/noAvatar.png';

type Props = {
    movieId: number;
}

const MoviesActors:FC<Props> = ({movieId}) => {

    const [actingList, setActingList] = useState<ICharacterModel[]>([])


    useEffect(() => {
        const fetchCreditsByFilmId = async (movieId: number): Promise<ICharacterModel[]> => {
            return await apiService.credits.getCreditsByFilmId(movieId.toString()).then(res => res.cast)
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
                            <img src={obj.profile_path ? baseImageUrl + obj.profile_path : noAvatarImage.src} alt={obj.name}/>
                            <div className={styles.actorName}>{truncateTextByCharacters(obj.original_name, 13)}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MoviesActors;