import React from 'react';
import {apiService} from "@/app/(private)/services/api-services";
import Link from "next/link";
import "./styles/top-rated-list-styles.css"

const TopRatedMoviesComponent = async () => {

    const response = await apiService.moviesearch.getTopRatedThisWeek()
    const moviesSliced = response.results.slice(0, 10);

    return (
        <div className={"top-rated-block"}>
            <div className={"top-rated-block-header"}>
                <span>Top Rated This Week</span><span><Link href={"/movies/top-rated"}>See all</Link></span></div>

            <div className={"top-rated-objects-container"}>{
                moviesSliced.map((obj, index) => (
                    <div key={obj.id} className={"top-rated-list-one-object-container"}>
                        <Link href={'/movies/'+obj.id}><div>{index+1}.</div><div className={"top-rated-list-one-object-container-title-and-score"}><span>{obj.title}</span><span>{obj.vote_average.toFixed(2)}</span></div></Link>
                    </div>
                ))
            }</div>
        </div>
    );
};

export default TopRatedMoviesComponent;