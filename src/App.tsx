import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState<string>('soprano')

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div >
      <form action="">
        <input
          type="text"
          placeholder = "Search TV Series"
          value = {text}
          onChange = {onChangeHandler}
        />
      </form>
    </div>
  );
}

export default App;
