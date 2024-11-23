import {options} from "@/app/services/settings";
import {IGenreModel} from "@/app/models/IGenreModel";
import {IUserModel} from "@/app/models/IUserModel";
import {IResponseModel} from "@/app/models/IResponseModel";
import {IMovieShortModel} from "@/app/models/IMovieShortModel";
import {IMovieFullModel} from "@/app/models/IMovieFullModel";

export const apiService = {

    genres: {
        getMovieAll: async ():Promise<IGenreModel[]> => {
            try {
                const genresList = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
                    .then(res => res.json())
                return genresList.genres
            }
            catch (err) {
                console.error("Server error request:", err);
                return [];
            }
        }
    },

    user: {
        getUserInformation: async ():Promise<IUserModel | null> => {
            try {
                const userInformation = await fetch('https://api.themoviedb.org/3/account/21630502', options)
                    .then(res => res.json())
                return userInformation;
            }
            catch (err) {
                console.error("Server error request:", err);
                return null;
            }
        }
    },

    moviesearch: {
        getPopular: async (page:string):Promise<IResponseModel & {results:IMovieShortModel[]}> => {
             return await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&region=ua`, options)
                .then(res => res.json())
                .catch(err => console.error(err));
        },
        getTopRatedThisWeek: async ():Promise<IResponseModel & {results:IMovieShortModel[]}> => {
            return await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=ua', options)
                .then(res => res.json())
                .catch(err => console.error(err));
        },

        getOneMovieShort: async (id:string):Promise<IMovieShortModel> => {
            return await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1&region=ua`, options)
                .then(res => res.json())
                .catch(err => console.error(err));
        },
        getOneMovieFull: async (id:string):Promise<IMovieFullModel> => {
            return await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
                .then(res => res.json())
                .catch(err => console.error(err));
        },
        getUpComingMovies: async ():Promise<IResponseModel & {results:IMovieShortModel[]}> => {
            return await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=ua`, options)
                .then(res => res.json())
                .catch(err => console.error(err));
        },
        getAllBySearchParam: async (searchParam:string):Promise<IResponseModel & {results:IMovieShortModel[]}> => {
            return await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchParam}&include_adult=false&language=en-US&page=1&region=ua`, options)
                .then(res => res.json())
                .catch(err => console.error(err));
        }

    }

}