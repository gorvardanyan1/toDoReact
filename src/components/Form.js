import { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <form onSubmit={(e) => this.props.handleAdd(e)}>
        <input type="text" />
        <input type="submit" value="Add" />
      </form>
    )
  }
}