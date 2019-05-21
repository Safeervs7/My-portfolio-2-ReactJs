import React from 'react';

const WithDiv = (props)=>{
    return <div className={props.class}>{props.children}</div>
}

export default WithDiv;