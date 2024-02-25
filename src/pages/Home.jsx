import React from 'react';
import HeroSection from '../component/HeroSection';
import NavbarSection from '../component/NavbarSection';
import About from '../component/About';
import Share from '../component/Share';
import TypeCourse from '../component/TypeCourse';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <div id='home'>
            <NavbarSection/>
            <HeroSection/>
            <About/>
            <Share/>
            <TypeCourse/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home;
