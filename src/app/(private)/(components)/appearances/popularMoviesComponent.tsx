import {imagePath600x900} from "@/app/(private)/services/settings";
import "./styles/popular-list-component-styles.css"
import Link from "next/link";
import {IMovieShortModel} from "@/app/(private)/models/IMovieShortModel";
import {FC} from "react";
import {truncateTextByCharacters} from "@/app/(private)/services/helpers";


type Props = {
    moviesSliced:IMovieShortModel[]
}

const PopularMoviesComponent:FC<Props> = ({moviesSliced}) => {

    // const response = await apiService.moviesearch.getPopular()
    //
    // const moviesSliced = response.results.slice(0, 7);

    return (
        <div className={"popular-list"}>
            <div className={"popular-list-small-navigation"}><span>Popular movies</span><span><Link href={"/movies/popular-movies"}>See all</Link></span></div>
            <div className={"popular-list-objects-container"}>{
                moviesSliced.map((obj) => (
                    <div key={obj.id} className={"popular-list-image-container"}>
                        <Link href={'/movies/'+obj.id}><img className={"main-paige-poster"} src={imagePath600x900 + obj.poster_path} alt={obj.title}/>
                            <div className="hover-cover"></div>
                        </Link>
                        <div className={"popular-list-image-container-title"}>{truncateTextByCharacters(obj.title, 13)}</div>
                    </div>
                ))
            }</div>
        </div>
    );
};

export default PopularMoviesComponent;