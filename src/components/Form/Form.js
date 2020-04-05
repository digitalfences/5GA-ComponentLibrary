import React from 'react';
import Button from '.././Button/Button.js';
import './Form.css';

const Form = (props) => {
    Form.defaultProps = {
        label: "",
        placeholder: props.label
    }
    let classList = '';
    const clickHandler= (event) =>{
        event.target.setAttribute("placeholder","");
    }
    const numberChanger = (event) =>{
        let number = event.target.parentElement.querySelector("input")
        if(event.target.innerText === '+'){
            let increment = number.value++;
            number.setAttribute('value',`${increment}`)
        }
        else if (event.target.innerText === '-'){
            let decrement = number.value--;
            number.setAttribute('value',`${decrement}`)
        }
        else
            return
    }
    /** Size determinant */
    if (props.small) {
        classList += ` small`;
    }
    if (props.medium) {
        classList += ` medium`;
    }
    if (props.large) {
        classList += ` large`;
    }
    if(props.filled){
        classList += ` filled`;
    }

    if(props.type === 'email'){

    }
    if(props.type === 'select'){

        return <div className={classList}>
        <select onClick={clickHandler} 
        className="inputField">
            <option>{props.placeholder}</option>
        </select></div>
    }
    if(props.type === 'number'){
        classList += ` number-form`;
        return(
        <div className={classList}>
            <button id="inc-button" onClick={numberChanger} label="-">-</button>
            <input type="number" defaultValue="0" min="0" max="100"/>
            <button id="dec-button" onClick={numberChanger} label="+">+</button>
       </div>)
    }
    if(props.type === 'button'){
        
    }
    if(props.type === 'checkBox'){
        
    }

    return(
        <div className={classList}>{props.label}<br></br><input className="inputField" onClick={clickHandler} type="text" placeholder={props.placeholder}></input></div>
    )
}

export default Form