"use client"
import React, {useEffect, useState} from 'react';
import {apiService} from "@/app/(private)/services/api-services";
import PaginationComponent from "@/app/(private)/(components)/pagination/paginationComponent";
import {useSearchParams} from "next/navigation";
import {IMovieShortModel} from "@/app/(private)/models/IMovieShortModel";
import {IResponseModel} from "@/app/(private)/models/IResponseModel";


const PopularMoviesPage = () => {

    const [query, setQuery] = useSearchParams()

    const [movieList, setMovieList] = useState<IMovieShortModel[]>([])
    const [paginationData, setPaginationData] = useState<IResponseModel>()

    useEffect(() => {
        apiService.moviesearch.getPopular().then((response) => {

            // setPaginationData(pagination)
            setMovieList(response.results)
            query.push('page', '1')
            console.log(query);
        })
    }, []);

    return (
        <div>
            {
                movieList.map((obj) => (
                    <div className={""} key={obj.id}>{obj.title}</div>
                ))
            }
            {
                paginationData && <PaginationComponent obj={paginationData}/>
            }
        </div>
    );
};

export default PopularMoviesPage;