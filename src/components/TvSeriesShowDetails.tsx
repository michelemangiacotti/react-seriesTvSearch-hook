import {Show} from "../model/series";
import React from "react";
import css from "./TvSeriesShowDetails.module.css";

interface TvSeriesShowDetailProps {
    show : Show | null;
}

export const TvSeriesShowDetails : React.FC<TvSeriesShowDetailProps>= ({show})=>{
    return show && (
        <div className={css.wrapper}>
            <div className={css.content}>
                <img className={css.image} src={show?.image?.original} alt=""/>

                {
                    show?.genres.map(g =>
                    <span className={css.tag} key={g}>{g}</span>
                    )
                }

                <div className={css.metadata}>
                    <h1>{show?.name}</h1>
                    <div className={css.summary} dangerouslySetInnerHTML={{__html: show?.summary}}/>
                    <a className={css.button} href={show?.url} target="_blank" rel="noopener noreferrer"/>
                </div>
            </div>

        </div>
    )
}