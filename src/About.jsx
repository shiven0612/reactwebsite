import React from 'react';
import Common from './Common';
import { NavLink } from 'react-router-dom';
import web from '../src/images/about.svg';

const About = () => {
    return (
        <>
            <Common
                name="Welcome to About page"
                imgsrc={web}
                visit='/contact'
                btnName="Contact Now" />
        </>

    )
};

export default About;