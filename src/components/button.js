import React from 'react';

import Aux from '../hoc/Aux';
import './button.css';

const Button = (props)=>{
    if(props.type === "link"){
        if(props.href === ""){
            return null
        }
    }
    if(props.type === "images"){
        if(!props.show){
            return null
        }
    }
    return (
        <Aux>
            <button style={props.style ? {...props.style}: null} onClick={(props.type === "link" || props.type === "images")? (event)=>{props.click(event, props.dataKey)}:(props.click) ? props.click:null} data-key={props.dataKey !== undefined? props.dataKey : ""} className={"btn btn-primary btn-resume " + (props.class ? props.class:"")}>{props.text}</button>
        </Aux>
    )
}

export default Button;