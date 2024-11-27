'use client'
import React, {useEffect, useState} from 'react';
import {apiService} from "@/app/services/api-services";
import {baseImageUrl} from "@/app/services/settings";
import styles from "./user.module.css"
import {IUserModel} from "@/app/models/IUserModel";


const UserComponent =  ()  => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [user, setUser] = useState<IUserModel | null>(null)

    const imagePath:string = baseImageUrl + user?.avatar.tmdb.avatar_path;

    useEffect(() => {
        const fetchData = async () => {
            return await apiService.user.getUserInformation();
        }
        if(!user){
            fetchData().then(res => setUser(res))
        }
    }, []);

    return (
        <div className={styles.container} onMouseOver={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                <img src={imagePath} alt={user?.name}/>
                <span>{user?.name}</span>
            <div className={isVisible ? styles.userInfo : styles.hidden}>
                <p><span>username: </span><span>{user?.username}</span></p>
                <p><span>user id: </span><span>{user?.id}</span></p>
                <p><span>country: </span><span>{user?.iso_3166_1}</span></p>
            </div>
        </div>
    );
};

export default UserComponent;