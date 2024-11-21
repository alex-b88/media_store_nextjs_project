import React from 'react';
import {apiService} from "@/app/(private)/services/api-services";
import "./left-side-user-block-styles.css"


const UserComponent = async ()  => {

    const user = await apiService.user.getUserInformation();
    const imagePath = "https://image.tmdb.org/t/p/w50_and_h50_bestv2" + user?.avatar.tmdb.avatar_path;

    // console.log(user);
    return (
        <div className={"left-side-user-block"}>
                <img src={imagePath} alt={user?.name}/>
                <span>{user?.name}</span>
        </div>
    );
};

export default UserComponent;