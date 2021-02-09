import React from 'react';

import PLAYGROUND_DATA from "./playground.data";

class Playground extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: PLAYGROUND_DATA
        }
    }

    render() {
        return (
            <div>Playground page</div>
        )
    }
}

export default Playground;