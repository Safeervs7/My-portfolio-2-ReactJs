import React, {Component} from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Redirect } from 'react-router-dom';

import WithDiv from '../hoc/withDiv';

import './name.css';

class Name extends Component{
    state = {
        redirect: false,
    };
    handleRedirect = ()=>{
        this.setState({redirect: true});
    }
    render(){
        if(this.state.redirect){
            return <Redirect to='/about'/>
        }
        return (<WithDiv class={this.props.class}>
                <h1 className="text-center name-header" onClick={this.handleRedirect}>SAFEER S</h1>
                <CSSTransition in={!this.props.state.verticalSet} appear={!this.props.state.verticalSet} timeout={500} >
                    {state => (
                        <h4 className="text-center" > Software
                        <span className="offset" style={
                            {   
                                visibility:"hidden",
                                fontSize: state === 'entering' ? '1em': state === 'entered' ? '0em': state === 'exiting' ? '1em': state === 'exited' ? '0em': '0em',
                                transition: 'font-size .7s'
                            }
                        }>{!this.props.state.verticalSet ? "break" : ""}</span>
                        {this.props.state.verticalSet? 
                            <span className="fas fa-laptop-code" style={
                                {   
                                    fontSize: '0.625em',
                                    opacity: state === 'entering' ? '0': state === 'entered' ? '0': state === 'exiting' ? '0': state === 'exited' ? '1': '0',
                                    transition: 'opacity .5s ease-out'
                                }
                            }></span>
                        :null}
                        developer</h4>
                    )}
                </CSSTransition>
                </WithDiv>);
    }
}
const mapStateToProps = (state, ownProps) => {
    return {state}
}
export default connect(mapStateToProps)(Name);