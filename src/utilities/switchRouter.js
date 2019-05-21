import React from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Home from '../containers/home';
import About from '../containers/about';
import Portfolio from '../containers/portfolio';
import Contact from '../containers/contact';
import Resume from '../containers/resume';
import ErrorPage from '../containers/errorPage';
import AnimatedPage from '../containers/animatedPage';
import ReactTimeout from 'react-timeout';

class ShowTheLocation extends React.Component {
  state = {
    component: AnimatedPage,
    componentPath: this.props.location.pathname
  };
  componentWillReceiveProps(){
  }
  render() {
    return  <Route exact component={this.state.component} />
  }
  handlePath = ()=>{
    let component = "";
    switch(this.props.location.pathname){
      case "/":
        component = Home
        break;
      case "/about":
        component = About
        break;
      case "/portfolio":
        component = Portfolio
        break;
      case "/contact":
        component = Contact
        break;
      case "/resume":
        component = Resume
        break;
      default:
        component = ErrorPage
    }
    this.setState({component: component, componentPath: this.props.location.pathname});
  }
  componentDidMount(){
    this.props.setTimeout(this.handlePath, 300);
  }
  componentDidUpdate(){
    if(this.state.componentPath !== this.props.location.pathname){
      if(this.state.component !== AnimatedPage){
        this.setState({component: AnimatedPage});
      }
      this.props.setTimeout(this.handlePath, 300);
    }
  }
}
const ShowTheLocationWithRouter = withRouter(ReactTimeout(ShowTheLocation));
export default ShowTheLocationWithRouter