'use client'
import React, {useEffect, useState} from 'react';
import {apiService} from "@/app/(private)/services/api-services";
import {IMovieShortModel} from "@/app/(private)/models/IMovieShortModel";
import "./form-search-component-styles.css"
import Link from "next/link";
import styles from "./formSearchComponent.module.css"
import {usePathname} from "next/navigation";

const FormSearchComponent = () => {

    const [inputValue, setInputValue] = useState<string>('')
    const [searchResults, setSearchResults] = useState<IMovieShortModel[]>([])
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [path, setPath] = useState<string>('')
    const [isFormFocused, setisFormFocused] = useState<boolean>(false)

    const currentPath:string = usePathname()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleFocus = () => {
        setisFormFocused(true);
    };

    const handleBlur = (event: React.FocusEvent<HTMLFormElement>) => {
        // Если элемент, на который уходит фокус, находится внутри формы, фокусируемся снова
        if (event.currentTarget.contains(event.relatedTarget as Node)) {
            return;
        }
        setisFormFocused(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await apiService.moviesearch.getAllBySearchParam(inputValue)
                    .then(res => res.results)
                setSearchResults(response)
                setIsVisible(true)
            }catch (error){
                console.log(error)
            }
        }

        if(inputValue){
            fetchData()
        }
    }, [inputValue])

    useEffect(() => {
        setInputValue('')
        setSearchResults([])
        setPath(currentPath)
        setIsVisible(false)
    }, [currentPath,isFormFocused]);


    return (
        <div className={"form-search-component"}>
            <form className={"form-search-component-form"} onFocus={handleFocus} onBlur={handleBlur}>
                    <div className={"search-icon"}></div>
                    <input type="text" value={inputValue} onChange={handleInputChange} placeholder={"Search your" +
                        " interesting..."} className={"form-search-component-search-input"}/>
            </form>
            <div className={isVisible ? styles.visible : styles.hidden}>
                {
                    searchResults && inputValue.length > 0 && searchResults.length > 0 ? searchResults.map((obj) =>
                        <div key={obj.id} className={"form-search-component-results-one-object"}>
                        <Link href={"/movies/"+obj.id}>{obj.title}</Link>
                    </div>) : null
                }
            </div>
        </div>

    );
};

export default FormSearchComponent;