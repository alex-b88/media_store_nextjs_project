'use client'
import React, {useEffect, useState} from 'react';
import {apiService} from "@/app/(private)/services/api-services";
import {IMovieShortModel} from "@/app/(private)/models/IMovieShortModel";
import "./form-search-component-styles.css"
import Link from "next/link";
import { useRouter } from 'next/navigation'

const FormSearchComponent = () => {

    const [inputValue, setInputValue] = useState<string>('')
    const [searchResults, setSearchResults] = useState<IMovieShortModel[]>([])
    const router = useRouter()
    console.log(router);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }


    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await apiService.moviesearch.getAllBySearchParam(inputValue)
                    .then(res => res.results)
                console.log(response)
                setSearchResults(response)
            }catch (error){
                console.log(error)
            }
        }

        if(inputValue){fetchData()}
    }, [inputValue])

    useEffect(() => {
        setInputValue('');
        setSearchResults([]);
    }, []);

    return (
        <div className={"form-search-component"}>
            <form className={"form-search-component-form"}>
                <div className={"search-icon"}></div>
                <div><input type="text" value={inputValue} onChange={handleInputChange} placeholder={"Search your" +
                    " interesting..."} className={"form-search-component-search-input"}/></div>
            </form>
            <div className={"form-search-component-results"}>
                {
                    searchResults && inputValue.length > 0 && searchResults.length > 0 ? searchResults.map((obj) => <div key={obj.id} className={"form-search-component-results-one-object"}>
                        <Link href={"/movies/"+obj.id}>{obj.title}</Link>
                    </div>) : null
                }
            </div>
        </div>

    );
};

export default FormSearchComponent;