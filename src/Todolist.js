import React, {Component} from 'react';

class Todolist extends Component {
    constructor() {
        super();
        this.state = {
            todoFilter: 'All',
            currentNumber: 1
        };
    }


    doneTask = (e) => {
        this.props.doneTask(e.target.parentNode.id);
    }

    removeTask = (e) => {
        this.props.removeTask(e.target.parentNode.id);
    }

    todoListFilter=(parametre)=>{
       this.setState({todoFilter:parametre});
    }

    render() {
        const items = this.props.myTasks.map((task, i) => {
            if (
                this.state.todoFilter === 'All' || (this.state.todoFilter==='Active'&& task.status==='passive') ||
                (this.state.todoFilter === 'Completed' && task.status === 'active')
            ) {
                return (
                    <li key={i} id={i} className={task.status}>
                        <span className={"id"}>{i+1}</span>
                        <span className={"title"}>{task.text}</span>
                        <span className={"type"} onClick={this.doneTask}/>
                        <span className={"delete"} onClick={this.removeTask}/>
                    </li>
                );
            }


        } );

        return (
            <div className={"todo-list type1"}>
            <ul>
                {items}
            </ul>
                <div className={"todo-filter"}>
                    <div className={"left"}>
                     <span>{this.props.remainTask} Kalan Öğeler</span>
                    </div>
                    <div className={"right"}>
                           <ul>
                           <li> <span onClick={()=>this.todoListFilter('All')}>Tümü</span>
                            <span onClick={()=>this.todoListFilter('Active')}>Aktif</span>
                            <span onClick={()=>this.todoListFilter('Completed')}>Tamamlanan</span></li>
                           </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todolist;
