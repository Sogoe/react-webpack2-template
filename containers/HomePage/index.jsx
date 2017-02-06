import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'guys!'
        }
    }

    render() {
        return (
            <div>
                Hello {this.state.name} !
            </div>
        )
    }
}

export default HomePage;