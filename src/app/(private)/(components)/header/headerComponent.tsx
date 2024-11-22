import React from 'react';
import "./header-component-styles.css"
import FormSearchComponent from "@/app/(private)/(components)/form/formSearchComponent";
import MenuComponent from "@/app/(private)/(components)/menu/menuComponent";
import GenresComponent from "@/app/(private)/(components)/genres/GenresComponent";



const HeaderComponent = () => {
    return (
        <div className={"header-component"}>
            <GenresComponent/>
            <FormSearchComponent/>
            <MenuComponent/>
        </div>
    );
};

export default HeaderComponent;