import React, {FC} from 'react';
import GenresProvider from "@/app/(private)/context/genresCotext";

type Props = {
    children?: React.ReactNode;
}

const MainContainer:FC<Props> = ({children}) => {
    return (
        <div className={"content-container"}>
            <hr/>
           <GenresProvider>
               {children}
           </GenresProvider>
        </div>
    );
};

export default MainContainer;