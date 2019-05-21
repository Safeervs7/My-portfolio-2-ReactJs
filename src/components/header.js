import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import { Link } from "react-router-dom";

import WithDiv from '../hoc/withDiv';

import './header.css';

class Header extends Component {
    state = {
        showMenu: false,
    }
    clicked = (e)=>{
        e.preventDefault();
        if(!this.state.showMenu){
            this.setState({showMenu: true});
        }
        else{
            this.setState({showMenu: false});
        }
    }
    render(){
        const innerWidth = window.innerWidth;
        const navBarButton = (<div className="navbar-header pull-right navBarButton-wrap">
                                <button type="button" id="navBarButton" onClick={this.clicked} className="pull-right">
                                    <span className={"glyphicon glyphicon-menu" + (this.state.showMenu ? "-right": "-left") + " arrow-button"}></span>
                                </button>
                            </div>);
        return (
            <WithDiv class="header-wrap">
                <nav className="navbar navbar-fixed-top">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle"  data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span> 
                        </button>
                    </div>
                    
                    {!this.state.showMenu ? navBarButton: null}
                    <Motion style={{x: spring(innerWidth <= 768 ? 0 :this.state.showMenu ? 0 : 50)}}>
                        {({x}) =>
                                <div style={{
                                            WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                            transform: `translate3d(${x}px, 0, 0)`,
                                    }} className={"collapse " + (this.state.showMenu ? "navbar-collapse ": "")} id="myNavbar">
                                    <ul className="nav  navbar-nav pull-right">
                                        <li className={'menu-list ' + (this.props.active === "Home" ? "active" : "")}><Link to="/">Home</Link></li>
                                        <li className={'menu-list ' + (this.props.active === "About" ? "active" : "")}><Link to="/about">About</Link></li>
                                        <li className={'menu-list ' + (this.props.active === "Portfolio" ? "active" : "")}><Link to="/portfolio">Portfolio</Link></li>
                                        <li className={'menu-list ' + (this.props.active === "Contact" ? "active" : "")}><Link to="/contact">Contact Me</Link></li>
                                        <li className={'menu-list ' + (this.props.active === "Resume" ? "active" : "")} ><Link to="/resume">Resume</Link></li>
                                        {navBarButton}
                                    </ul>
                                </div>
                        }
                    </Motion>
                </nav>
            </WithDiv>
        )
    }
}

export default (Header);