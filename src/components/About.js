import React from 'react';
import Aboutimg from '../images/about.jpeg'
import {Title} from './Title'
const AboutImage = ()=>{
    return (
        <div className="about-image">
            <img src={Aboutimg} alt="" />
        </div>
    );
}

const AboutInformation = ()=>{
    return (
        <div className="about-information">
            <h2>Explore The Difference</h2>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?<br/>
            <br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?<br/>
            </p>
            <a href="22">READ MORE</a>
        </div>
    );
}
export const About = ()=>{
    return (
        <section className="about" id='about'>
            <Title title='ABOUT' subTitle='US'/>
            <div className="about-container flex-nw">
                <AboutImage/>
                <AboutInformation/>
            </div>
        </section>
    );
}