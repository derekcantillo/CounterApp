import React, { useState } from 'react';
import PropTypes from 'prop-types';
const CounterApp = ({value})=>{
    const initialState=0;

    const [counter, setCounter]=useState(initialState);

    const handleAdd=()=>{
        
        //setCounter(counter+1)
        setCounter((c)=>c+1)
    }
    const handleSubtract=()=>{
        if(counter===0){
            setCounter(initialState)
        }else{
            setCounter(counter-1)
        }
       
    }
    const handleReset=()=>{
        setCounter(initialState)
    }
    return(
        <>
        <h1>
            CounterApp
        </h1>
        <h2>{counter}</h2>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>+1</button>
        </>
        
    );
} 

CounterApp.propTypes={
    value: PropTypes.number
}
export default CounterApp;