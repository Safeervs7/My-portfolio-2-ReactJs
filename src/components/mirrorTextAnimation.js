import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Aux from '../hoc/Aux';

const MirrorAnimation = (props)=>{
    return (
            <Aux>
                <CSSTransition in={true} appear={true} timeout={500} >
                    {state => (
                        <Aux>
                            <span style={
                                {
                                    // transform: 'matrix(-1, 0, 0, 1, 0, 0)', 
                                    opacity: props.text === "." ? 0 : 1,
                                    float:"left",
                                    color: "rgba(18, 251, 133, 0.88)",
                                    transform: state === 'entering' ? 'scale(-1, 1)': state === 'entered' ? 'scale(1, 1)': state === 'exiting' ? 'scale(-1, 1)': state === 'exited' ? 'scale(1, -1)': 'scale(-1, 1)',
                                    transition: 'transform .5s linear',
                                }
                            }
                            >{props.text}</span>
                        </Aux>
                    )}
                </CSSTransition>
            </Aux>
        )
}
export default MirrorAnimation;