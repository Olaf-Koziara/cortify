import React from 'react';
import "./TextInput.scss"
interface textInputProps{
    placeholder?:string,
    type?:string,
    background?:string
}

const TextInput = ({placeholder='',type='underline',background='transparent'}:textInputProps) => {

    return (
        <input className={`text-input-${type}--${background}`} type="text" placeholder={placeholder} />
    );
};

export default TextInput;