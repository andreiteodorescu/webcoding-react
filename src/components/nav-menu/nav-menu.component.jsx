import React from 'react';
import './nav-menu.styles.scss';

const NavMenu = () => (
    <div className="navbar-wrapper">
        <div className="container">
            <div className="navbar text-center">
                <a className="navbar-brand" href="/" title="WebCoding by Andrei Teodorescu">
                    <span>
                        <i data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">W</i>
                        <i data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">e</i>
                        <i data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">b</i>
                    </span>
                    <i data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300">C</i>
                    <i data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" data-aos-delay="400">o</i>
                    <i data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500">d</i>
                    <i data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" data-aos-delay="600">i</i>
                    <i data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" data-aos-delay="700">n</i>
                    <i data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" data-aos-delay="800">g</i>
                </a>
            </div>
        </div>
    </div>
);

export default NavMenu;