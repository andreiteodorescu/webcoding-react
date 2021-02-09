import React from 'react';

import './about.styles.scss';

const About = () => (
    <div>
        <div className="component-about component-margin" id="component-about">
            <div className="container">
                <div className="row d-block d-lg-flex align-items-xl-center">
                    <div className="col-lg-3 col-xl-6 text-center mb-5 mb-lg-0">
                        {/*<img className="img-fluid img-shadow"
                             src="<?php bloginfo('template_directory'); ?>/images/andrei_teodorescu.jpg"
                             alt="Andrei Teodorescu" width="500" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="150" data-aos-once="true"/>*/}
                    </div>

                    <div className="col-lg-9 col-xl-6 component-about-info text-center text-lg-left">
                        <h2 className="general-title component-about-info-title" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150" data-aos-once="true">12 Years experience</h2>
                        <p className="component-about-info-undertitle" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150" data-aos-once="true">
                            My name is Andrei Teodorescu, I'm a Front-End Developer who loves to create fully responsive,
                            intuitive and dynamic user experiences. I'm always motivated and have the desire to learn more.
                            <br/>
                                While I'm not debugging some code or trying to position elements right, I love to hang out
                                with my friends, travel, play video games, listen to music etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="separator component-margin" data-aos="zoom-in" data-aos-duration="2000" data-aos-offset="200" data-aos-once="true"></div>
    </div>
)

export default About;