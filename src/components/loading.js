import React from 'react';
import Aux from '../hoc/Aux';
import Button from '../components/button';

import './loading.css'
const Loading = (props)=>{
    const components0 = (<Aux><p>something went wrong</p><Button click={props.click? props.click: null} className="btn btn " text="Reload"/></Aux>);
    const components1 = (<Aux><p>something went wrong</p></Aux>);
    return (
        <div className={"loading " + (!props.error? "spinner":"error")}>
            {props.error && props.reload? components0: props.error && !props.reload? components1: null}
        </div>
    )
}

export default Loading;