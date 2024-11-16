import {options} from "@/app/(private)/services/settings";
import {IGenreModel} from "@/app/(private)/models/IGenreModel";
import {IUserModel} from "@/app/(private)/models/IUserModel";
import {IResponseModel} from "@/app/(private)/models/IResponseModel";
import {IMovieModel} from "@/app/(private)/models/IMovieModel";

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
        getPopular: async ():Promise<IResponseModel & {results:IMovieModel[]}> => {
             const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=ua', options)
                 .then(res => res.json())
                 .catch(err => console.error(err));
             return response;
        }
    }

}