
export interface IMovieProviderModel {
        display_priorities: {
            [countryCode: string]: number;
        }[]
        display_priority: number,
        logo_path: string,
        provider_name: string,
        provider_id: number
}