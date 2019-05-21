import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../components/header';
import WithDiv from '../hoc/withDiv';
import HalfShade from '../components/halfShade';
import AboutMe from '../components/aboutMe';
import Button from '../components/button';

import './about.css'

class About  extends Component{
    state = {
        redirect: false,
    };
    redirecting = (event)=>{
        event.preventDefault();
        this.setState({redirect: true});
    }
    render(){
        if(this.state.redirect){
            return <Redirect to='/resume'/>
        }
        return (
            <WithDiv>
                <HalfShade initial="0%"/> 
                <Header active="About"/>
                <WithDiv class="container " >
                    <AboutMe/>
                </WithDiv>
                <WithDiv class="text-center" >
                    <Button type="resume" click={this.redirecting} text="View My Resume"/>
                </WithDiv>
            </WithDiv>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {state}
}
export default connect(mapStateToProps)(About);