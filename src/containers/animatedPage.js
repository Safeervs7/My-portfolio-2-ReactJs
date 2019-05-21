import React, {Component} from 'react';
import ReactTimeout from 'react-timeout';

import Aux from '../hoc/Aux';
import './animatedPage.css';

class animatedPage extends Component{
    state = {
        leftPoint: window.innerWidth/2
    }
    render(){
        return (
            <Aux>
                {/* <HalfShade initial="0%"/> */}
                <div>
                </div>
                <div className="circle" style={{left: this.state.leftPoint}}> </div>
                <div className="progess-circle top-left" style={{
                    top: ((window.innerHeight/2) + (0)) -50,
                    left: ((this.state.leftPoint) + (50))-50,
                }}></div>
                <div className="progess-circle top-right" style={{
                    top: ((window.innerHeight/2) + (0))-50,
                    left: ((this.state.leftPoint) + (0))-50,
                }}></div>
                <div className="progess-circle bottom-left" style={{
                    top: ((window.innerHeight/2) + (50))-50,
                    left: ((this.state.leftPoint) + (0))-50,
                }}></div>
                <div className="progess-circle bottom-right" style={{
                    top: ((window.innerHeight/2) + (50))-50,
                    left: ((this.state.leftPoint) + (50))-50,
                }}></div>
            </Aux>
        )
    }
    handleTimeout = ()=>{
        this.setState({leftPoint: window.innerWidth - 50});
    }
    componentDidMount(){
        // this.props.setInterval( this.handleTimeout, 100);
    }
}
export default ReactTimeout(animatedPage);