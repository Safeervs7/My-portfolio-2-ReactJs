import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import axiosLoadPdf from '../utilities/axiosInstance';

import Header from '../components/header';
import Offset from '../components/offset';
import Aux from '../hoc/Aux';
import HalfShade from '../components/halfShade';
import Loading from '../components/loading';
import Button from '../components/button';
import './resume.css';

class Resume extends Component{
    state = {
        loadError: false,
        buttonProp: {name:"Download", class:null}
    }
    handleDownloadResume = ()=>{
        this.setState({buttonProp: {name:"Loading Pdf", class:"loading-btn"}});
        axiosLoadPdf("biodata.json", 'json')    
            .then(response=>{
                    var base64str = response.data;
                    var binary = atob(base64str.replace(/\s/g, ''));
                    var len = binary.length;
                    var buffer = new ArrayBuffer(len);
                    var view = new Uint8Array(buffer);
                    for (var i = 0; i < len; i++) {
                        view[i] = binary.charCodeAt(i);
                    }
                    var blob = new Blob( [view], { type: "application/pdf" });
                    var url = URL.createObjectURL(blob);
                    this.props.dispatch({
                        type:'DOWNLOAD_PDF',
                        data: url});
                    this.setState({buttonProp: {name:"Download", class:null}});
                    window.open(this.props.state.downloadedPdf, "_blank");
                })
            .catch(error=>{
                this.setState({buttonProp: {name:"Failed, Click to Reload", class:"error-btn"}});
            });
    }
    render(){
        return (
            <Aux>
                <HalfShade initial="0%"/>
                <Header active="Resume"/>
                <div className="container">
                    <Offset/>
                    <div className={"my-resume" + (this.props.state.PDF ? " border-style":"")} >
                        {this.props.state.PDF? 
                            <Aux>
                                <Scrollbars
                                    style={{height:window.innerHeight - (window.innerHeight * 20 / 100)}}
                                    autoHide
                                    autoHideTimeout={400}
                                    autoHideDuration={100}
                                    thumbMinSize={30}
                                    universal={true}
                                    renderThumbVertical={({ style }) => <div style={{...style, backgroundColor: '#479e9d', width: '10px', opacity: '1', borderRadius: "10px"}}></div>}
                                >
                                    <img style={{width: "100%"}}className="img img-responsive"src={this.props.state.PDF} alt="pdf"/>
                                </Scrollbars>
                                <Button class={this.state.buttonProp.class ? (this.state.buttonProp.class + " download-btn"):"download-btn"} text={this.state.buttonProp.name} click={this.handleDownloadResume}></Button>
                            </Aux>
                        :this.state.loadError? <Loading error={true}/>:<Loading error={false}/>}
                    </div>
                </div>
            </Aux>
        )
    }
    componentDidMount(){
        
        if(!this.props.state.PDF){
            axiosLoadPdf("biodataImage.json", 'json')    
            .then(response=>{
                    let pdf = response.data;
                    this.props.dispatch({
                        type:'LOAD_PDF',
                        data: pdf});
                })
            .catch(error=>{
                this.setState({loadError: true});
            });
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {state}
}
export default connect(mapStateToProps)(Resume);