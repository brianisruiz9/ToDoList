import React, { Component } from 'react';
import './App.css';
import {task} from './task.json';
import TodoForm from './components/TodoForm';


class App extends Component {

  constructor() {
    super();
    this.state = {
      task
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      task: this.state.task.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(task) {
    this.setState({
      task: [...this.state.task, task]
    })
  }

  preview(task){
    this.set('selectedTask', task);
  }

  render(){
    const task = this.state.task.map((task, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-info ml-2">
                {task.date}
              </span>
            </div>
            <div className="card-body">
              {task.description}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-success"
                onClick={this.removeTodo.bind(this, i)}>
                Done
              </button>
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
    )
    });

    

    return (
      <div className="App">

        <nav className="navbar navbar-expand-md navbar-dark">
          <h2>ToDo List</h2>
          <hr/>
          <p><span>{this.state.task.length} Incompleted Tasks</span></p>
        </nav>
        
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {task}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
