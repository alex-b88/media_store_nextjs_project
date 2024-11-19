import {apiService} from "@/app/(private)/services/api-services";


type Props = {
    id:string;
}

const OneMoviePage = async ({params}:{params:Props}) => {

    const movie = await apiService.moviesearch.getOneMovieShort(params.id)

    return (
        <div>
                <div>{movie.title}</div>
                <div>{movie.overview}</div>
        </div>
    );
};

export default OneMoviePage;