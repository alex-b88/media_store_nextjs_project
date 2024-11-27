import {IDateModel} from "@/app/models/IDateModel";
import {IGenreModel} from "@/app/models/IGenreModel";

export const RuntimeConverter = (duration:number):{hours:number, minutes:number} => {
    const h = Math.floor(duration / 60);
    const m = duration % 60;
    return {hours: h, minutes: m}
}

export const truncateTextByWords = (text: string, wordLimit: number): string => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
}

export const truncateTextByCharacters = (text: string, characterLimit: number): string => {
    if (text.length <= characterLimit) {
        return text
    }
    return text.slice(0, characterLimit) + '...';
}


export const getReleaseDate = (date:string): IDateModel =>{
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(date);
    return {
        year: dateObj.getFullYear(),
        month: monthNames[dateObj.getMonth()],
        day: dateObj.getDate()
    };
}

//получение списка жанров
export const getSlicedGenres = (left:IGenreModel[], right:number[]):IGenreModel[] => {
    return  left.filter(obj1 => right.some(obj2 => obj2 === obj1.id));
}