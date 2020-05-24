import React from "react";
import {Series} from "../model/series";
import css from "./TvSeriesResult.module.css";

export interface TvSeriesResultProps {
    result: Series[];
    itemClick: (series: Series) => void;
}

export const TvSeriesResult: React.FC<TvSeriesResultProps> = ({result, itemClick}) => {
    return <>
        result: {result.length}
        <div className={css.grid}>
            {
                result.map(series => {
                    const {show: {id, image, name}} = series;
                    return <div className={css.gridItem}
                                key={id}>
                        <div className={css.movie} onClick={() => itemClick(series)}>
                            {
                                image ?
                                    <img src={image?.medium} alt=""/> :
                                    <NoImage/>
                            }
                            <div>
                                {name}
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    </>
}

export const NoImage = () =>{
    return <div className={css.noImage}/>;
}