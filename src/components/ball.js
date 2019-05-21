import React from 'react';
import ReactTimeout from 'react-timeout';
import {connect} from 'react-redux';

import './ball.css'

class Balls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {x: 250, y: 300, yPoint: 0,xPoint: 0, rotate: 0, vertical: 0};
  };

  handleMove = () => {
    this.setState({xPoint: this.state.xPoint - (window.innerWidth/2),yPoint: this.state.yPoint + window.innerHeight - 150, rotate: 360, });
  };

  handleMoveUpdate = () => {
    this.props.setTimeout(this.dispatch, 100);
    this.setState({ vertical: 90});
  };
  dispatch = () => {
    this.props.dispatch({
      type:'VERTICAL_SET',
      data: true});
  }

  render() {
    let ballWidth = 50;
    if(window.innerWidth < 412){
      ballWidth = 35;
    }
    let balls = [{x: window.innerWidth/2, y: window.innerHeight - (ballWidth/2)}, {x: window.innerWidth/2, y: window.innerHeight - (ballWidth/2)}, {x: window.innerWidth/2, y: window.innerHeight - (ballWidth/2)}, {x: window.innerWidth/2, y: window.innerHeight - (ballWidth/2)}, {x: window.innerWidth/2, y: window.innerHeight - (ballWidth/2)}, {x: window.innerWidth/2, y: window.innerHeight - (ballWidth/2)}, {x: window.innerWidth/2, y: window.innerHeight - (ballWidth/2)}, {x: window.innerWidth/2, y: window.innerHeight - (ballWidth/2)}];
    return (
          <div className="demo1" >
            {balls.map(({x, y}, i) =>{
                if(this.state.vertical){
                  y -= (this.state.yPoint + (ballWidth));
                  if(i >= 4){
                    x += (((i-3) * ballWidth)) - (ballWidth/2) ;
                  }
                  else{
                    x -= ((i * ballWidth)) + (ballWidth/2) ;
                  }
                }
                else{
                  y -= (this.state.yPoint + ((Math.floor(i/3)) * ballWidth)) ;
                }
                return <div
                key={i}
                className={`demo1-ball ball-${i}`}
                style={{
                  WebkitTransform: `translate3d(${x - (ballWidth/2)}px, ${y - (ballWidth/2)}px, 0)`,
                  transform: `translate3d(${x - (ballWidth/2)}px, ${y - (ballWidth/2)}px, 0) rotate(${this.state.rotate}deg)`,
                  zIndex: balls.length - i,
                }} />
            }
            )}
      </div>
    );
  };
  componentDidUpdate(){
    if(this.state.vertical === 0){
      this.props.setTimeout(this.handleMoveUpdate, 700);
    }
  }
  componentDidMount(){
    this.props.setTimeout(this.handleMove, 1);
  }
}
const mapStateToProps = (state, ownProps) => {
    return {state}
}

export default connect(mapStateToProps)(ReactTimeout(Balls));