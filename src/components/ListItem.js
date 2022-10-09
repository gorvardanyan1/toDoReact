import React, { Component } from 'react'

export class ListItem extends Component {
    render() {
        let { id, title, handleChecked, deleteFunc } = this.props
        return (
            <li>
                <input type="checkbox" onChange={(e) => handleChecked(e,id)} />
                <h4>{title}</h4>
                <button onClick={() => deleteFunc(id)}>Delete</button>
            </li>
        )
    }
}

export default ListItem