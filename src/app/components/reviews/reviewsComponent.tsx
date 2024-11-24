'use client'
import React, {FC, useEffect, useState} from 'react';
import styles from "./reviews.module.css"
import {IReviewsModel} from "@/app/models/IReviewsModel";
import {apiService} from "@/app/services/api-services";
import {baseImageUrl} from "@/app/services/settings";
import RatingComponent from "@/app/components/rating/ratingComponent";
import { format } from 'date-fns';
import {truncateTextByWords} from "@/app/services/helpers";
import noAvatarImage from '../../images/noAvatar.png';

type Props = {
    movieId: number
}

const ReviewsComponent:FC<Props> = ({movieId}) => {

    const [reviewsList, setReviewsList] = useState<IReviewsModel>()

    useEffect(() => {
        const fetchCreditsByFilmId = async (movieId: number): Promise<IReviewsModel> => {
            return await apiService.getReviews(movieId)
        }
        fetchCreditsByFilmId(movieId)
            .then(res => setReviewsList(res))
    }, []);

    return (
        <div className={styles.container}>
            {
                reviewsList?.results.length ? reviewsList.results.map(obj => (
                    <div key={obj.id} className={styles.reviewsContainer}>
                        <div className={styles.reviewsHeader}>
                            <div>
                                <img src={obj.author_details.avatar_path ? baseImageUrl + obj.author_details.avatar_path : noAvatarImage.src} alt={obj.author_details.username}/>
                                <div className={styles.nameAndDate}>
                                    <p>{obj.author}</p>
                                    <p>{format(new Date(obj.created_at), 'dd MMMM yyyy')}</p>
                                    <p>{format(new Date(obj.created_at), 'HH:mm:ss')}</p>
                                </div>
                            </div>
                            <div>
                                <RatingComponent rating={obj.author_details.rating}/>
                            </div>
                        </div>
                        <p>{truncateTextByWords(obj.content, 50)}</p>
                    </div>
                )) : <p>No reviews yet...</p>
            }
        </div>
    );
};

export default ReviewsComponent;