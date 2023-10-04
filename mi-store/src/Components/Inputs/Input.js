import React, { useEffect, useState } from "react";
import './Input.css';

const Input = ({type,placeholder}) =>{

    const [inputValue,setInputValue] = useState('');

    useEffect(()=>{
        console.log(inputValue);  
    })

    const handleInput = (e) =>{
        setInputValue(e.target.value);
    }

    return(
        <input className="Inputs" type={type} placeholder={placeholder} value={inputValue} onChange={(e)=>handleInput(e)}/>
    );

};


export default Input;