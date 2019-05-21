import React from 'react';

import Name from '../components/name';
import Balls from '../components/ball';
import Header from '../components/header';
import Aux from '../hoc/Aux';
import HalfShade from '../components/halfShade';

import './home.css'

const Home = ()=>{
    return (
        <Aux>
            <HalfShade initial="0%"/>
            <Name class="center-name" />
            <Header active="Home"/>
            <Balls/>
        </Aux>
    )
}
export default Home;