'use client'
import React, {useEffect, useState} from 'react';
import {apiService} from "@/app/services/api-services";
import {IMovieShortModel} from "@/app/models/IMovieShortModel";
import Link from "next/link";
import styles from "./formSearchComponent.module.css"
import {usePathname} from "next/navigation";

const FormSearchComponent = () => {

    const [inputValue, setInputValue] = useState<string>('')
    const [searchResults, setSearchResults] = useState<IMovieShortModel[]>([])
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const currentPath:string = usePathname()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setInputValue(event.target.value)
    }

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


    const handlerOnMouseLeave = () =>{
        setIsVisible(false)
        setInputValue('')
    }

    useEffect(() => {
        setInputValue('')
        setSearchResults([])
        setIsVisible(false)
    }, [currentPath])



    return (
        <div className={styles.component}>
            <form className={styles.form} onMouseLeave={handlerOnMouseLeave}>
                <div className={styles.searchIcon}></div>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder={"Search your" +
                    " interesting..."} className={styles.input}/>
                <div className={isVisible ? styles.visible : styles.hidden}>
                    {
                        searchResults && searchResults.length > 0 ? searchResults.map((obj) =>
                            <div key={obj.id} className={styles.resultsItem}>
                                <Link href={"/movies/" + obj.id} className={styles.a}>{obj.title}</Link>
                            </div>) : <div className={styles.noResults}> nothing found...</div>
                    }
                </div>
            </form>

        </div>

    );
};

export default FormSearchComponent;