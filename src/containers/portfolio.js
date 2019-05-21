import React, {Component} from 'react';
import axiosInstance from '../utilities/axiosInstance';
import {connect} from 'react-redux';

import Header from '../components/header';
import Aux from '../hoc/Aux';
import HalfShade from '../components/halfShade';
import Offset from '../components/offset';
import Card from '../components/card';
import Button from '../components/button';
import Loading from '../components/loading';
import Modal from '../components/modal';

import './portfolio.css'

class Portfolio extends Component{
    state = {
        loadError: false,
        showModal: false,
        modalImages: null,
        modalHeader: "Title",
        lastLoadedIndex: 0,
        modalClosed: false,
    }
    onClickLink = (event, link)=>{
        event.preventDefault();
        window.open(link, "_blank");
    }
    handleReload= (event)=>{
        this.setState({loadError: false});
        this.onClickImages(event, this.state.lastLoadedIndex);
    }
    onClickImages = (event, index)=>{
        event.preventDefault();
        let modalHeader = "";
        let key = "";
        if(this.props.state.portfolioDetails[index]){
            if(this.props.state.portfolioDetails[index].images){
                modalHeader = this.props.state.portfolioDetails[index].title;
                key = this.props.state.portfolioDetails[index].key;
            }
        }
       
        if(this.props.state.images[index]){
            this.setState({showModal: true,modalHeader: modalHeader, modalImages: [...this.props.state.images[index]], modalClosed: false});
        }
        else{
            this.setState({showModal: true,modalHeader: modalHeader, modalClosed: false});
            let url = "/portfolio-images/" + key + ".json";
            axiosInstance(url, 'json')
            .then((response)=>{
                let newData = {};
                newData["index"] = index;
                newData["images"] = [...response.data];
                this.props.dispatch({
                        type:'PORT_FOLIO_IMAGE_DETAILS',
                        images: newData});
                if(!this.state.modalClosed){
                    this.setState({showModal: true,modalHeader: modalHeader,lastLoadedIndex: index, modalImages: [...this.props.state.images[index]]});
                }
            })
            .catch(error=>{
                this.setState({showModal: true,modalHeader: modalHeader, lastLoadedIndex: index, modalImages: null, loadError: true, modalClosed: true});
            });
            return null
        }
    }
    closeModal = ()=>{
        this.setState({showModal: false, modalImages: null, loadError: false, modalClosed: true});
    }
    render(){
        let portfolioDetails = <Loading error={false}/>;
        if(this.props.state.portfolioDetails){
            portfolioDetails = this.props.state.portfolioDetails.map((portfolioDetails, index)=>{
                return (<Card key={portfolioDetails.title} class={"card" + index}>
                                <h5 className="card-title">{portfolioDetails.title}</h5>
                                <div className="card-text-block">
                                    <p className="card-text-p">{portfolioDetails.notes}</p>
                                    <div className="clear-both"></div>
                                    <div className="btn-group">
                                        <Button dataKey={portfolioDetails.link} click={this.onClickLink} href={portfolioDetails.link} class="" type="link" text="View Link"/>
                                        <Button dataKey={index} click={this.onClickImages} class="" show={portfolioDetails.images ? true: false} type="images" text="View Images"/>
                                    </div>
                                </div>
                            </Card>
                        )
            })
        }
        return (
            <Aux>
                <HalfShade initial="0%"/>
                <Header active="Portfolio"/>
                <div className="container">
                    <Offset/>
                    {(this.state.loadError && !this.state.showModal)? <Loading error={true}/>:<Aux><Modal handleReload={this.handleReload} error={this.state.loadError} click={this.closeModal} showModal={this.state.showModal} header={this.state.modalHeader} data={this.state.modalImages ? this.state.modalImages:null}/> {portfolioDetails}</Aux>}
                </div>
            </Aux>
        )
    }
    componentDidMount(){
        if(!this.props.state.portfolioDetails){
            axiosInstance("/portfolio.json", "json")
            .then(response=>{
                let data = [...response.data];
                this.props.dispatch({
                    type:'PORT_FOLIO_DETAILS',
                    data: data});
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
export default connect(mapStateToProps)(Portfolio);