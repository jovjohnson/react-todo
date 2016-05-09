import React from 'react';

export default class CreateTodo extends React.Component {
  render() {
    return (
        <form onSubmit={this.handleCreate.bind(this)}>
          <input type="text" placeholder="what do you need to do?" ref="createInput" />
          <button>create</button>
        </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';

    // console.log(this.refs.createInput.value); //logs value of input box
  }
}
