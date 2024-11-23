import {apiService} from "@/app/(private)/services/api-services";
import MoviesListCardComponent from "@/app/(private)/(components)/appearances/moviesListCardComponent";
import Layout from "@/app/(private)/movies/[id]/layout";


type Props = {
    id:string;
    title:string;
    description:string;
}

const OneMoviePage = async ({params}:{params:Props}) => {

    const { id } = await params
    const obj = await apiService.moviesearch.getOneMovieFull(id)

    return (
        <Layout title={obj.title} description={obj.overview}>
          <MoviesListCardComponent obj={obj}/>
        </Layout>
    );
};

export default OneMoviePage;