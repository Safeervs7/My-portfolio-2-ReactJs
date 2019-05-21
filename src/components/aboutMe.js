import React, {Component} from 'react';
import ReactTimeout from 'react-timeout';

import Aux from '../hoc/Aux';
import MirrorTextAnimation from './mirrorTextAnimation';
import Offset from './offset';

import './aboutMe.css';

class AboutMe extends Component{
    state= { 
        text: [ "E", "F", "A", "S", ".", "M", "`", "I"],
        animatedText : ["E" ],
    }
    handleMove =(index)=>{
        let oldText = [...this.state.animatedText];
        let newText = oldText.concat(this.state.text[index]);
        this.setState({animatedText: newText});
    }
    render(){
        const animatedText = this.state.animatedText.map((text, index)=>{
            if((index + 1) === this.state.animatedText.length){
                return <MirrorTextAnimation key={index+text} text={text}/>
            }
            return ""
        });
        const reverseText = [...this.state.animatedText.slice(0, this.state.animatedText.length - 1)].reverse();
        const reverseComp = reverseText.map((text, index)=>{
            if(text === "."){
                return <span key={index+text} style={{opacity: 0}}>{text}</span>
            }
            return <span key={index+text}>{text}</span>
        })
        return (
            <Aux>
                <Offset/>
                <h4 className="title-about" style={{color: "#f3eeb5"}}>{reverseComp}{animatedText}{"R"}</h4>
                {/* <h4 ><span className="am">I AM</span> SAFEER S,</h4> */}
                <p className="details" > 
                    A software developer from Kerala, India. I have been building interactive experiences, creating brands and designing print materials for over six months. I’m a fan of structure and simplicity in both design and code; organization and consistency are very important to me.
                    A few of my strengths are creative concept and strategy development, web development and bridging communication between developers and designers.
                    I find inspiration in nature, architecture, and vintage fashion. When I’m not working, you can find me at a local coffee house,  or even enjoying some sports activities.
                </p>
            </Aux>
        )
    }
    componentDidMount(){
        let timerCount = 0;
        var intervalID = this.props.setInterval( ()=> {
            this.handleMove(timerCount);
            if (++timerCount === 8) {
                this.props.clearInterval(intervalID);
            }
        }, 300);
    }
}
export default ReactTimeout(AboutMe);