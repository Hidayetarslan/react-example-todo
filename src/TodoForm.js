import React, {Component} from 'react';


class TodoForm extends Component {
    constructor() {
        super();
        this.addTask=this.addTask.bind(this);
    }

    addTask=(e)=>{
     e.preventDefault();
     const inp=document.getElementById("todoInput");
     const val=inp.value;
     inp.value='';
     this.props.addTask(val);
    }

    render() {
        return (

            <div >
                <div className={"todo typel"}>
                    <form className={"input-wrapper"} onSubmit={this.addTask}>
                        <input id={"todoInput"}className={"add-todo"} type="text" placeholder={"Ne yapılması gerekiyor?"}/>
                    </form>
                </div>
                <button type={"button"} className={"add-btn"} onClick={this.addTask}/>
            </div>

        );
    }
}

export default TodoForm;
