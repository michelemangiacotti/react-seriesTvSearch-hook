import {useState} from "react";
import {Series, Show} from "../model/series";
import Axios from "axios";

export function useTvSeries(){

    const [result, setResult] = useState<Series[]>([])
    const [details, setDetails] = useState<Show | null>(null);

    const itemClickHandler = (series:Series) =>{
        setDetails(series.show)
    }

    const closeModal = () => {
        setDetails(null);
    }

    const searchHandler = (text : string) => {
        Axios.get<Series[]>(`http://api.tvmaze.com/search/shows?q=${text}`)
            .then(res => setResult(res.data))

    }

    return {
        series : result,
        search : searchHandler,
        itemClick : itemClickHandler,
        details,
        closeModal,
    }
}