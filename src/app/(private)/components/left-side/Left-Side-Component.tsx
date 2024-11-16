import React from 'react';
import GenresComponent from "@/app/(private)/components/genres/GenresComponent";


const LeftSideComponent = () => {



    return (
        <div className={"left-side"}>
            left side component
            <hr/>
            <GenresComponent/>
        </div>
    );
};

export default LeftSideComponent;