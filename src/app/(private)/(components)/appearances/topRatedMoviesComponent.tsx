import React from 'react';
import {apiService} from "@/app/(private)/services/api-services";
import Link from "next/link";
import {imagePath600x900} from "@/app/(private)/services/settings";

const TopRatedMoviesComponent = async () => {

    const response = await apiService.moviesearch.getTopRatedThisWeek()

    const moviesSliced = response.results.slice(0, 6);

    return (
        <div className={"popular-list"}>
            <div className={"popular-list-small-navigation"}>
                <span>Top Rated This Week</span><span><Link href={"/movies/top-rated"}>See all</Link></span></div>
            <div className={"popular-list-objects-container"}>{
                moviesSliced.map((obj) => (
                    <div key={obj.id} className={"popular-list-image-container"}>
                        <Link href={'/movies/'+obj.id}><img className={"main-paige-poster"} src={imagePath600x900 + obj.poster_path} alt={obj.title}/></Link>
                    </div>
                ))
            }</div>
        </div>
    );
};

export default TopRatedMoviesComponent;