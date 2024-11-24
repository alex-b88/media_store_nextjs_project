import {imagePath600x900} from "@/app/services/settings";
import "./styles/popular-list-component-styles.css"
import Link from "next/link";
import {truncateTextByCharacters} from "@/app/services/helpers";
import {apiService} from "@/app/services/api-services";


const PopularMoviesComponent = async() => {

    const response = await apiService.moviesearch.getPopular('1')

    const moviesSliced = response.results.slice(1, 8);


    return (
        <div className={"popular-list"}>
            <div className={"popular-list-small-navigation"}><span>Popular movies</span><span><Link href={"/movies/popular"}>See all</Link></span></div>
            <div className={"popular-list-objects-container"}>{
                moviesSliced.map((obj) => (
                    <div key={obj.id} className={"popular-list-image-container"}>
                        <Link href={'/movies/'+obj.id}><img className={"main-paige-poster"} src={imagePath600x900 + obj.poster_path} alt={obj.title}/>
                            <div className="hover-cover"></div>
                        </Link>
                        <div className={"popular-list-image-container-title"}>{truncateTextByCharacters(obj.title, 11)}</div>
                    </div>
                ))
            }</div>
        </div>
    );
};

export default PopularMoviesComponent;