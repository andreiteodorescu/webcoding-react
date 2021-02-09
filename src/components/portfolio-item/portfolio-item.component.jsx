import React from 'react';
import './portfolio-item.styles.scss';

class PortfolioItem extends React.Component {
    render () {
        let posts = this.props.posts

        let postLoop = posts && posts.map((post, index)=> {
            return (
                <div className="col-md-6 component-portfolio-item" key={'portkey-' + post.id} data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" data-aos-once="true">
                    <div className="component-portfolio-inner d-flex flex-column justify-content-center">
                        <span className="project-year">
                            {post.custom.year}
                        </span>

                        <h4 className="component-portfolio-inner-title">
                            {post.title.rendered}
                        </h4>
                        <ul className="list-unstyled project-tech d-flex flex-wrap justify-content-center">
                            {post.tag_names.map((tagname, index) => {
                                return <li key={'tagkey-' + post.id + index}>{tagname}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            )
        })

        return (
            <div className="row">
                {postLoop}
            </div>
        )
    }
}

export default PortfolioItem;