import {apiService} from "@/app/(private)/services/api-services";
import {imagePath600x900} from "@/app/(private)/services/settings";
import "./styles/popular-list-component-styles.css"
import Link from "next/link";


const PopularMoviesComponent = async () => {

    const response = await apiService.moviesearch.getPopular()

    const moviesSliced = response.results.slice(0, 6);

    return (
        <div className={"popular-list"}>
            <div className={"popular-list-small-navigation"}><span>Popular movies</span><span><Link href={"/movies/popular-movies"}>See all</Link></span></div>
            <div className={"popular-list-objects-container"}>{
                moviesSliced.map((obj) => (
                    <div key={obj.id} className={"popular-list-image-container"}>
                        <Link href={'/movies/'+obj.id}><img className={"main-paige-poster"} src={imagePath600x900 + obj.poster_path} alt={obj.title}/>
                            <div className="hover-cover"></div>
                        </Link>
                    </div>
                ))
            }</div>
        </div>
    );
};

export default PopularMoviesComponent;