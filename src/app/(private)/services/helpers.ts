
// export const RuntimeConverter1 = ({ runtime:string }) => {
//     const convertRuntime = (runtime) => {
//         const hours = Math.floor(runtime / 60);
//         const minutes = runtime % 60;
//         return `${hours}ч ${minutes}м`;
//     };
//
//     return <span>{convertRuntime(runtime)}</span>;
// };

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