import React from 'react';
import './staging.styles.scss';

const Staging = () => (
    <div className="staging d-flex align-items-center white-cut-bottom">
        <div className="container">
            <h1 itemProp="name" className="staging-title" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">
                Committed to next-level front end experiences.
                Based in 44°25'39.86" N 26°06'15.01" E
            </h1>

            <a className="btn-primary" href="#component-contact" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">Let's Talk</a>
        </div>
        <a className="dive-down" href="#component-about"></a>
    </div>
)

export default Staging;