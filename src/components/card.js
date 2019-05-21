import React from 'react';

import './card.css'
const Card = (props)=>{
    return (
        <div className={"card-wrap col-lg-12 col-md-12 col-xs-12 col-sm-12 " + (props.class ? props.class: "")}>
            <div className="card ">
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Card;