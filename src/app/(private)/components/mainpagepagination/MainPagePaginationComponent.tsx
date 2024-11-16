import React, {FC} from 'react';
import "./main-page-pagination-component-styles.css"

type MainPagePaginationComponentProps = {
    prev: number;
    next: number;
    length: number;
}

const MainPagePaginationComponent:FC<MainPagePaginationComponentProps> = ({prev, next, length}) => {

    return (
        <div className={"buttons-section"}>
            <button>prev</button>
            <button>next</button>
        </div>
    );
};

export default MainPagePaginationComponent;