'use client'
import React, {FC, ReactNode} from 'react';
import {IMovieFullModel} from "@/app/models/IMovieFullModel";
import {baseImageUrl} from "@/app/services/settings";
import {getReleaseDate, RuntimeConverter} from "@/app/services/helpers";
import Link from "next/link";
import RatingComponent from "@/app/(components)/rating/ratingComponent";
import MoviesActors from "@/app/(components)/movieActors/moviesActors";
import styles from "./styles/moviesListCard.module.css"


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MoviePictures from "@/app/(components)/moviePictures/moviePictures";
import ReviewsComponent from "@/app/(components)/reviews/reviewsComponent";

type Props = {
    obj: IMovieFullModel;
}

type TabPanelProps = {
    children?: ReactNode;
    index: number;
    value: number;
}

//один фильм полностью инфо
const MoviesListCardComponent:FC<Props> = ({obj}, props: TabPanelProps) => {

    const date = getReleaseDate(obj.release_date);

    // tabs import
    const movieDuration = RuntimeConverter(obj.runtime);
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function CustomTabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    }

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    // tabs import

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>{obj.title}</h2>
                {/*<p><span>{obj.vote_average ? obj.vote_average.toFixed(1):0} </span>/10</p>*/}
                <div><span>{obj.vote_average ? <RatingComponent rating={obj.vote_average.toFixed(1).toString()}/> :
                    <RatingComponent rating={'0'}/>} </span></div>
            </div>
            <p className={styles.tagLine}>{obj.tagline}</p>
            <div className={styles.durationAndCategories}>
                <p>{movieDuration.hours}hr {movieDuration.minutes}min</p>
                <div className={styles.genresList}>
                    {
                        obj.genres.map(g => (<span key={g.id}><Link href={"/genres/" + g.name}>{g.name}</Link> </span>))
                    }
                </div>
            </div>
            <img src={baseImageUrl + obj.backdrop_path} alt={obj.title}/>
            <div className={styles.dateAndBudget}>
                <div className={styles.releaseDate}>
                    <p>Release date:</p>
                    {
                        obj.release_date ? <span>{date.month} {date.day}, {date.year}</span> : <span>Not available</span>
                    }
                </div>
                <div className={styles.productionBudget}>
                    <p>Budget:</p>
                    {
                        obj.budget ? <span>${obj.budget / 1000000} millions</span> : <span>Not available</span>
                    }
                </div>
            </div>
            <div className={styles.description}>{obj.overview}</div>
            <div className={styles.companies}>
                <p>Movie companies:</p>
                {
                    obj.production_companies.map(c => (
                        <div key={c.id}>{c.name}</div>
                    ))
                }
            </div>

            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Reviews" {...a11yProps(0)} />
                        <Tab label="Pictures" {...a11yProps(1)} />
                        <Tab label="Top cats" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <ReviewsComponent movieId={obj.id}/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <MoviePictures movieId={obj.id}/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <MoviesActors movieId={obj.id}/>
                </CustomTabPanel>
            </Box>
        </div>
    );
};

export default MoviesListCardComponent;