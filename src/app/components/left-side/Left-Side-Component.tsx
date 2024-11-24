import React from 'react';
import GenresComponent from "@/app/components/genres/GenresComponent";
import UserComponent from "@/app/components/user/UserComponent";


const LeftSideComponent = () => {


    return (
        <div className={"left-side"}>
            <UserComponent/>
            <hr/>
            <GenresComponent/>
        </div>
    );
};

export default LeftSideComponent;