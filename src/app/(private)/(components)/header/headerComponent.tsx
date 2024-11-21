import React from 'react';
import "./header-component-styles.css"
import FormSearchComponent from "@/app/(private)/(components)/form/formSearchComponent";



const HeaderComponent = () => {
    return (
        <div className={"header-component"}>
            <FormSearchComponent/>
        </div>
    );
};

export default HeaderComponent;