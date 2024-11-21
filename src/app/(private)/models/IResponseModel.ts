
export interface IResponseModel {
    dates?: {
        maximum: Date,
        minimum: Date
    },
    page: number,
    total_pages: number,
    total_results: number
}