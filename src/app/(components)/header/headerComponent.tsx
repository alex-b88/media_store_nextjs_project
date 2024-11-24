import React from 'react';
import "./header-component-styles.css"
import FormSearchComponent from "@/app/(components)/searchForm/formSearchComponent";
import MenuComponent from "@/app/(components)/menu/menuComponent";
import GenresComponent from "@/app/(components)/genres/GenresComponent";
import UserComponent from "@/app/(components)/user/UserComponent";



const HeaderComponent = () => {
    return (
        <div className={"header-component"}>
            <GenresComponent/>
            <FormSearchComponent/>
            <MenuComponent/>
            <UserComponent/>
        </div>
    );
};

export default HeaderComponent;