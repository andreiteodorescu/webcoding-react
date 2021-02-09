import React from 'react';
import NavMenu from "../../components/nav-menu/nav-menu.component";
import Staging from "../../components/staging/staging.component";
import About from "../../components/about/about.component";
import PortfolioList from "../../components/portfolio-list/portfolio-list.component";

import AOS from "aos";
import "aos/dist/aos.css";


class HomePage extends React.Component {
    componentDidMount (){
        AOS.init({
            disable: 'mobile'
        });
    }

    render() {
        return (
            <div>
                <NavMenu/>
                <main className="main">
                    <Staging/>
                    <About/>
                    <PortfolioList/>
                </main>
            </div>
        );
    }
}


export default HomePage;