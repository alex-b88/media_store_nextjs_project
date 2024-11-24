'use client'
import React from 'react';
import styles from "./menu.module.css"

const MenuComponent = () => {

    return (
        <div className={styles.container}>
            <button onClick={() => {
                window.location.href = "/";
            }}>Main page
            </button>
        </div>
    );
};

export default MenuComponent;