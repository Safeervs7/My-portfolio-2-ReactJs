import React from 'react';
import Header from '../components/header';
import Aux from '../hoc/Aux';
import HalfShade from '../components/halfShade';
import Card from '../components/card';
import Offset from '../components/offset';

import "./contact.css";

const Contact = ()=>{

    return (
        <Aux>
            <HalfShade initial="0%"/>
            <Header active="Contact"/>
            <div className="container">
                <Offset/>
                <div className="offset-div"></div>
                    <Card class="fadeIn-gmail">
                        <h4 className="card-title"><i className="fas fa-envelope"></i> Gmail</h4>
                        <p className="card-text"><a href="mailto:safeervs7@gmail.com">safeervs7@gmail.com</a></p>
                    </Card>
                    <Card class="fadeIn-skype">
                        <h4 className="card-title"><i className="fab fa-skype"></i> Skype</h4>
                        <p className="card-text"><a target="_blank" rel="noopener noreferrer" href="https://join.skype.com/invite/hI3eO2IQzhvi">https://join.skype.com/invite/hI3eO2IQzhvi</a></p>
                    </Card>
            </div>
        </Aux>
    )
}

export default Contact;