import React, {useState} from "react";

export interface TvSeriesSearchProps {
    search: (text : string) => void;
}

export const TvSeriesSearch: React.FC<TvSeriesSearchProps> = ({search}) =>{

    const [text, setText] = useState<string>('')

    const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        search(text);

    }

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return  <form onSubmit={searchHandler}>
        <input
            type="text"
            placeholder="Search TV Series"
            value={text}
            onChange={onChangeHandler}
        />
    </form>
}