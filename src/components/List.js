import React, { Component } from 'react'
import ListItem from './ListItem'

export class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { toDos, deleteFunc ,handleChecked } = this.props
        return (
            <ul>
                {
                    toDos.map((elem) => <ListItem key={elem.id} id={elem.id} title={elem.title} handleChecked={(e,id) => handleChecked(e,id)} deleteFunc={id => deleteFunc(id)} />)
                }
            </ul>
        )
    }
}
export default List