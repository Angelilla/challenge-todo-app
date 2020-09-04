import React, { Component } from 'react';
import todoService from '../lib/todo-service';
import axios from "axios";

class TodoCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
          todo: ''
        };
    }

    componentDidMount () {
        const {
            match: {
              params: { todoId }
            }
          } = this.props;
        //const { params } = this.props.match;
        const todo = todoService.getTodo(todoId)
        this.setState({todo})
    }

   /* getTask = () => {
        const { params } = this.props.match;
        axios
            .get(`http://localhost:4000/api/v1/todos/${params.id}`)
            .then(res => {
                const task = res.data;
                console.log(task)
                this.setState({task: task})
            })
            .catch(err => {
                console.log(err);
            });
        
    }*/

    delTodo = () => {
        const taskId = this.state.task._id;
        todoService.deleteTodo(taskId)
    }

    render() {

        const {todo} = this.state
        return (
            <div >
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <input type="submit" value='delete' onClick={this.delTodo}/>
                </div>
        )
    }

}

export default TodoCard;