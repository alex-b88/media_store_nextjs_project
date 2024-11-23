import React from 'react';
import "./header-component-styles.css"
import FormSearchComponent from "@/app/(components)/searchForm/formSearchComponent";
import MenuComponent from "@/app/(components)/menu/menuComponent";
import GenresComponent from "@/app/(components)/genres/GenresComponent";



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