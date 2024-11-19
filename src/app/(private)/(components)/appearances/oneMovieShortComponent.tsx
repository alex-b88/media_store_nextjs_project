import {imagePathW600} from "@/app/(private)/services/settings";
import "./styles/one-movie-short-styles.css"
import {apiService} from "@/app/(private)/services/api-services";
import {RuntimeConverter} from "@/app/(private)/services/helpers";


//компонент для отображения одного фильма, короткая версия
const OneMovieShortComponent = async() => {

    const obj = await apiService.moviesearch.getOneMovieFull("313369")
    const movieDuration = RuntimeConverter(obj.runtime);

    return (
        <div className={"one-movie-short-container"}>
            <div className={"one-movie-short-container__image"}>
                <img src={imagePathW600 + obj.poster_path} alt=""/>
            </div>
            <div className={"one-movie-short-container__info-container"}>
                <div className={"one-movie-short-container__info"}>
                    <div>
                        <h3>{obj.title}</h3>
                        <p className={"one-movie-short-container__info-title-and-score"}><span>{obj.vote_average.toFixed(1)}</span><span>/10</span></p>
                    </div>
                    <div className={"cats-duration"}>
                        <span>{movieDuration.hours}hr {movieDuration.minutes}min</span>
                        {
                            obj.genres.map(g => (<span key={g.id}>{g.name}</span>))
                        }
                    </div>
                    <div className={"one-movie-short-container__info-movie-description"}>{obj.overview}</div>
                </div>
            </div>
        </div>
    );
};

export default OneMovieShortComponent;