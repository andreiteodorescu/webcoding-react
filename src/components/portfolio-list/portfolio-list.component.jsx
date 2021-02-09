import React from 'react';

import PortfolioItem from "../portfolio-item/portfolio-item.component";

class PortfolioList extends React.Component {
    constructor() {
        super();

        this.state = {
            portfolio: []
        }
    }

    componentDidMount() {
        const portUrl = 'https://www.webcoding.ro/wp-json/wp/v2/posts?categories=2&per_page=100&order=asc';

        fetch(portUrl)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    portfolio: response
                })
            })
    }

    render() {
        return (
            <div className="component-portfolio component-margin">
                <div className="container">
                    <h4 className="general-title text-center" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="200" data-aos-once="true">Clients</h4>
                    <PortfolioItem posts={this.state.portfolio} />
                </div>
            </div>
        );
    }
}

export default PortfolioList;