import React, { useState } from 'react';

export const AddCategory = () => {
    
    const [inputValue, setInputValue] = useState('Mundo');

    const onInputChange = (event)=>{
        setInputValue(event.target.value)
        console.log(event.target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        console.log(inputValue);
    }

  return (

    <form onSubmit={(event)=> onSubmit(event)}>
       <input
        type='text'
        placeholder='Buscar'
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}
