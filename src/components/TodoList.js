import React, { Component } from 'react';
import todoService from '../lib/todo-service';
import TodoCard from './TodoCard';

class TodoList extends Component {

    state={
        todos: '',
        todo: {}
    }
    

    componentDidMount() {
        todoService.getAllTodos()
        .then(response => {
            console.log(response)
            this.setState({
                todos: response
            })
        })
    }

    handleDelTodo = e =>{
        const todoId = this.state.todo._id;
        console.log(todoId)
        e.preventDefault()
        todoService.deleteTodo(todoId)
    }



    render() {

        const { todos } = this.state

        return (
            <div>
                {
                    todos ? todos.map(todo => {
                        return (
                            <div key={todo._id}>
                               <h3>{todo.title}</h3>
                                <p>{todo.body}</p>
                            <input type="submit" value='delete' onClick={this.handleDelTodo}/>
                            {/*<TodoCard/>*/}
                            </div>
                        )
                    }) : null
                }
            </div>
        )
    }
}

export default TodoList;