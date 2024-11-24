import React from 'react';
import styles from "./moviesProviders.module.css"
import {apiService} from "@/app/services/api-services";
import {baseImageUrl} from "@/app/services/settings";

const MoviesProvidersComponent = async () => {

    const list = await apiService.getProvider().then(res => res.results.slice(0, 17))

    return (
        <div className={styles.providerContainer}>
            <p className={styles.containerHeader}>Providers: </p>
            <div className={styles.providersList}>
                {
                    list.map(item => (
                        <div key={item.provider_id} className={styles.logoProvider}>
                            <img key={item.provider_id} src={baseImageUrl + item.logo_path} alt={item.provider_name}/>
                            <div className={styles.hoverCover}></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MoviesProvidersComponent;