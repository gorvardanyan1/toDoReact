import React, { Component } from 'react'
import Footer from './components/Footer'
import { Form } from './components/Form'
import { List } from './components/List'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
    this.deleteComplited = this.deleteComplited.bind(this)
  }
  state = {
    toDos: [
      {
        id: 1,
        title: "Do Task",
        isChecked: false,
      },
      {
        id: 2,
        title: "Do Anestesia",
        isChecked: false,
      },
      {
        id: 3,
        title: "Do Operation",
        isChecked: false,
      },
    ],
    completedCount: 0
  }
  handleAdd(e) {
    e.preventDefault()
    this.setState(prevProps => ({
      toDos: [...prevProps.toDos, {
        id: prevProps.toDos.length + 1,
        title: e.target[0].value,
        isChecked: false,
      }]
    }))
  }
  deleteComplited() {
    this.setState(prevProps => ({
      toDos: prevProps.toDos.filter(elem => elem.isChecked == false)

    }), () => this.setState({ completedCount: 0 }))
  }
  handleChecked(e, id) {
    this.setState(prevState => {
      prevState.toDos.find(elem => elem.id == id).isChecked = e.target.checked

    }, () => this.setState({ completedCount: this.state.toDos.filter(elem => elem.isChecked == true).length }))


  }

  handleDelete(id) {
    this.setState((prevState) => {
      let a = prevState.toDos.find(elem => elem.id == id)
      prevState.toDos.splice(prevState.toDos.indexOf(a), 1)
      return { toDos: [...prevState.toDos] }
    }
    )
  }
  render() {
    return (
      <main>
        <Form handleAdd={title => this.handleAdd(title)} />
        <List toDos={this.state.toDos} deleteFunc={(id) => this.handleDelete(id)} handleChecked={(e, id) => this.handleChecked(e, id)} />
        <Footer count={this.state.toDos.length} completedCount={this.state.completedCount} deleteComplited={this.deleteComplited} />
      </main>
    )
  }
}

export default App
