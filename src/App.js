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

  render(){
    const task = this.state.task.map((task, i) => {
      return (
        <tbody>
          <tr>
            <th scope="row"><i id="check" className="far fa-check-circle"></i></th>
            <td className="hand"> <a id="show" href="#">{task.title}</a> </td>
            <td>{task.date}</td>
            <td> 
              <i id="edit" className="fas fa-pencil-alt"></i>
              <i id="del" className="fas fa-trash-alt" onClick={this.removeTodo.bind(this, i)}></i>
            </td>
          </tr>
        </tbody>
    )
    });

    return (
      <div className="App">

        <nav className="navbar navbar-expand-md navbar-dark">
          <h2>ToDo List</h2>
          <hr/>
          <p><span>{this.state.task.length} Incompleted Tasks</span><br/>fecha</p>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="">Incomplete Tasks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Completed Tasks</a>
              </li>        
            </ul>
          </div>
          </nav>

          <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
               <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>
          </div>
          </div>

          <div class="container-fluid">
		      <a href=""><button type="button" class="btn btn-info">Add Task</button></a>
	        </div>

          <div className="container-fluid" id="tab">
          <div className="table-responsive">
            <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Task</th>
                    <th>Complete by</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                {task}
            </table>
          </div>
          </div>
       
      </div>
    );
  }
}
export default App;
