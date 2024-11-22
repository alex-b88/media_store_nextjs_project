'use client'
import React from 'react';

const MenuComponent = () => {



    return (
        <div className={"main-menu"}>
            <button onClick={() => {
                window.location.href = "/";
            }}>Main
            </button>
        </div>
    );
};

export default MenuComponent;