
// export const RuntimeConverter1 = ({ runtime:string }) => {
//     const convertRuntime = (runtime) => {
//         const hours = Math.floor(runtime / 60);
//         const minutes = runtime % 60;
//         return `${hours}ч ${minutes}м`;
//     };
//
//     return <span>{convertRuntime(runtime)}</span>;
// };

import {IDate} from "@/app/(private)/models/IDate";

export const RuntimeConverter = (duration:number) => {
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


export const getReleaseDate = (date:string): IDate =>{
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(date);
    return {
        year: dateObj.getFullYear(),
        month: monthNames[dateObj.getMonth()],
        day: dateObj.getDate()
    };
}