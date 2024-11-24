import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {FC} from "react";

type Props = {
    rating:string
}

const RatingComponent:FC<Props> = ({rating}) => {
    const ratingValue = ((+rating)/2).toFixed(1).toString()
    return (
        <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={ratingValue} precision={0.5} readOnly={true}/>
        </Stack>
    );
};

export default RatingComponent;