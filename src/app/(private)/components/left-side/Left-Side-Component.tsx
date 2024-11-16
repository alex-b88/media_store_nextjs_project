import React from 'react';
import GenresComponent from "@/app/(private)/components/genres/GenresComponent";
import UserComponent from "@/app/(private)/components/user/UserComponent";


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