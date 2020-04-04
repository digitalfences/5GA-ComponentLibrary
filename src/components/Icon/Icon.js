import React from 'react';
import './Icon.css';
import heart from '../../.././img/hearts.png';
import cart from '../../.././img/cart_2.png';

const Icon = (props) => {
    let classList = '';

    let types = ["cart","heart"];

    if (types.includes(props.type)) {
        classList += ` icon-${props.type}`;
    }
    if (props.type == 'cart'){
        return(
            <img src = {cart} alt ="A cart icon"/>
        )
    }
    else if (props.type =='heart'){
        return(
            <img src = {heart} alt ="A heart icon"/>
        )
    }
    else {
        return(
            <img src = '' alt ="An error loading image occurred"/>
            
        )
    }
}


export default Icon; 