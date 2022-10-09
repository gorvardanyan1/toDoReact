import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <h5>{this.props.count} / {this.props.completedCount}</h5>
                <button onClick={e => this.props.deleteComplited()}>Clear Complited</button>
            </footer>
        )
    }
}

export default Footer