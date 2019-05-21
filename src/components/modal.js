import React, {Component} from 'react';
import Sliders from "react-slick";
import ModalImages from 'react-modal';

import Button from '../components/button';

import Aux from '../hoc/Aux';
import Loading from '../components/loading';

import './modal.css';

class Modal extends Component{
    state={
        modalHeight: window.innerHeight * 80/100,
    }
    render(){
        let slideImages = null;
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
            };
        if(this.props.data){
            slideImages = [];
            slideImages = this.props.data.map((image, index)=>{
                return <div key={index}><img ref="imgSize" style={{margin: "0 auto",maxHeight: (window.innerHeight * 50/100)}} className="img-responsive modal-image"src={image} alt="Images" /></div>
            })
        }
        const modalHeight = this.state.modalHeight > (window.innerHeight  * (50 /100)) ? this.state.modalHeight:(window.innerHeight  * (50 /100));
        const customStyles = {
            content : {
                positon               : "relative!important",
                top                   : '50%',
                left                  : '50%',
                height                : modalHeight,
                // width                 : "80%",
                backgroundColor       : "#479e9d",
                overflow              : "hidden",
                transform             : 'translate(-50%, -50%)',
                padding               : "1% 10%",
                borderRadius          : "20px",
            }
        };
        ModalImages.setAppElement('#root');
        const handleReload = (event)=>{
            this.props.handleReload(event);
        }
        return (<Aux>
                 <ModalImages
                    isOpen={this.props.showModal}
                    style={customStyles}
                    contentLabel="Modal"
                    onRequestClose={this.props.click}
                    >
                    <h5 className="modal-title">{this.props.header}</h5>
                    <div  className="modal-slider">
                        {(this.props.data && slideImages) ? <Sliders {...settings}>{slideImages}</Sliders> :this.props.error ? <Loading click={handleReload} reload={true} error={true}/>: <Loading error={false}/>}
                    </div>
                    <Button  click={this.props.click} class="modal-close" type="modal" text="Close"/>
                    </ModalImages>
        </Aux>);
    }
    componentDidUpdate(){
    }
}

export default Modal;