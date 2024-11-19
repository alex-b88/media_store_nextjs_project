'use client'

import {createContext, useContext, useEffect, useState} from "react";
import {IGenreModel} from "@/app/(private)/models/IGenreModel";
import {apiService} from "@/app/(private)/services/api-services";

const GenresContext = createContext<IGenreModel[]>([]);
export const useGenres = () => useContext(GenresContext)

export default function GenresProvider({children}: { children: React.ReactNode }) {

    const [genres, setGenres] = useState<IGenreModel[]>([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const res = await apiService.genres.getMovieAll();
            setGenres(res);
        }
        fetchGenres();
    }, [])

    return (<GenresContext.Provider value={genres}>{children}</GenresContext.Provider>)
}