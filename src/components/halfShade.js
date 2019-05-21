import React from 'react';
import { CSSTransition } from 'react-transition-group';

import WithDiv from '../hoc/withDiv';
import Aux from '../hoc/Aux';

const HalfShade = (props)=>{
    return (
        <WithDiv>
            <CSSTransition in={true} appear={true} timeout={500} >
                {state => (
                    <Aux>
                        <div style={{
                            float: "left",
                            content: "",
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: state === 'entering' ? props.initial: state === 'entered' ? '50%': state === 'exiting' ? props.initial: state === 'exited' ? props.initial: props.initial,
                            minHeight: '100%',
                            height: Math.max(document.body.scrollHeight, window.innerHeight) ,
                            backgroundColor: '#5da7a6',
                            transition: 'width .3s linear',
                            zIndex:-1
                        }}></div>
                    </Aux>
                )}
            </CSSTransition>
        </WithDiv>
    )
}
export default HalfShade;