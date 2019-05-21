import React from 'react';

const Offset = (props)=>{
    return (
            <div style={{
                position: 'relative',
                margin: 'auto 10px',
                top: '-32vw',
                right: '0',
                bottom: '0',
                left: '0',
                maxWidth: '1400px',
                height: (window.innerHeight) * 9 / 100,
                width: '100%',
            }}>
            </div>
    )
}

export default Offset;