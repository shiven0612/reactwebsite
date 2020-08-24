import React from 'react';
import Common from './Common';
import { NavLink } from 'react-router-dom';
import web from '../src/images/home.svg';

const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with "
                imgsrc={web}
                visit='/service'
                btnName="Get Started" />
        </>

    )
};

export default Home;