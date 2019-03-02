import React, { Component } from 'react';

import './App.css';
import Todolist from './Todolist';
import Footer from './Footer';
import Header from './Header';
import TodoForm from './TodoForm';


class App extends Component {

    constructor() {
        super();
        this.state = {
            myTasks: [
                {
                    text: "Yapılacak iş",
                    status: 'passive'
                },
                {
                    text: "Kitap oku",
                    status: 'passive'
                },
                {
                    text: "Film izle",
                    status:'passive'
                },
                {
                    text: "uyu",
                    status:'passive'
                }
            ]
        };
    }

   addTask = (val) => {
      this.setState(prevState => ({
          myTasks: [
              ...prevState.myTasks,
              {
                  text: val,
                  status: 'passive'
              }
          ]
      }));
   }

   doneTask = (task_id) => {
        /*
       task_id = task_id.replace('task', '');
       let updatedList = this.state.myTasks;
       let newStatus = 'active';
       let currentStatus = updatedList[task_id].status;
       if (currentStatus === 'active') {
           newStatus = 'passive';
           updatedList[task_id].status = newStatus;
           this.setState({myTasks: updatedList})
       }
       */

        this.setState(prevState => ({
            myTasks: [
                ...prevState.myTasks.map((task, index) => {
                    console.log(task_id, index, task);
                    if (index == task_id) {
                        task.status = 'active';
                    }

                    return task;
                })
            ]
        }));

   }

   removeTask = (task_id) => {
       this.setState(prevState => ({
           myTasks: [
               ...prevState.myTasks.filter((task, index) => index != task_id)
           ]
       }));
   }

   remainTask = () => {
       return this.state.myTasks.filter(task => task.status == 'passive').length;
   }

   render() {
    return (
      <div className="content">
          <Header/>
          <TodoForm addTask={this.addTask}/>
          <Todolist
              myTasks={this.state.myTasks}
              doneTask={this.doneTask}
              removeTask={this.removeTask}
              remainTask = {this.remainTask()}
          />
          <Footer/>
      </div>
    );
  }
}

export default App;
