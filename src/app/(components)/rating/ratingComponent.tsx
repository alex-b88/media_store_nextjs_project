import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {FC} from "react";

type Props = {
    rating:string | number;
}

const RatingComponent:FC<Props> = ({rating}) => {

    if(typeof rating !== "string"){
        rating = ((+rating)/2).toFixed(1).toString()
    }
    else {
        rating = ((+rating)/2).toFixed(1)
    }

    return (
        <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly={true}/>
        </Stack>
    );
};

export default RatingComponent;