import PopularMoviesComponent from "@/app/(private)/(components)/appearances/PopularMoviesComponent";
import TopRatedMoviesComponent from "@/app/(private)/(components)/appearances/topRatedMoviesComponent";
import OneMovieShortComponent from "@/app/(private)/(components)/appearances/oneMovieShortComponent";


export default function Home() {
  return (
    <div className="Home">
        <PopularMoviesComponent/>
        <OneMovieShortComponent/>
        <TopRatedMoviesComponent/>
    </div>
  );
}
