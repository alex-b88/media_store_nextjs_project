import React, {FC} from 'react';

type Props = {
    children?: React.ReactNode;
}

const MainContainer:FC<Props> = ({children}) => {
    return (
        <div className={"content-container"}>
            <hr/>
            {children}
        </div>
    );
};

export default MainContainer;