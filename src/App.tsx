import React from 'react';
import './components/TvSeriesResult.module.css';
import {TvSeriesResult} from "./components/TvSeriesResult";
import {TvSeriesSearch} from "./components/TvSeriesSearch";
import {useTvSeries} from "./hooks/useTvSeries";
import {TvSeriesShowDetails} from "./components/TvSeriesShowDetails";


const App = () => {
    const {itemClick,series,search, details, closeModal } = useTvSeries();

    return (
        <div>
            <TvSeriesSearch search={search}/>
            <TvSeriesResult result={series} itemClick={itemClick}/>
            <TvSeriesShowDetails show={details}  onClose={closeModal}/>
        </div>
    );
}

export default App;
