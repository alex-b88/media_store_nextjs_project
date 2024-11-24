
export interface IImagesOfMovieModel {
    backdrops:
        {
            aspect_ratio: number,
            height: number,
            iso_639_1?: string,
            file_path: string,
            vote_average: number,
            vote_count: number,
            width: number
        }[],
    id: number,
    logos: {
        aspect_ratio: number,
        height: number,
        iso_639_1?: string,
        file_path: string,
        vote_average: number,
        vote_count: number,
        width: number
    }[],
    posters: {
        aspect_ratio: number,
        height: number,
        iso_639_1?: string,
        file_path: string,
        vote_average: number,
        vote_count: number,
        width: number
    }[]
}