import React, { Component } from 'react';
import todoService from '../lib/todo-service';

class FormTodoCreate extends Component {

    state = {
        title: '',
        body: ''
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const { title, body } = this.state;
        todoService.createTodo({ title, body }).then(() => this.setState({ title: '', body: '' }))

    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        //.then(this.props.history.push('/todos'))
    }

    render() {
        const { title, body } = this.state;

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label>Title<strong>*</strong></label>
                    <input type="text" name='title' value={title}  onChange={this.handleChange} placeholder='title' required/>
                </div>
                <div>
                    <label>Task</label>
                    <input type="text" name='body' value={body}  onChange={this.handleChange} placeholder='body'/>
                </div>
                <div>
                    <input type="submit" value="Add a new todo"/>
                </div>
            </form>
        )
    }

}

export default FormTodoCreate;
