import axios from "axios";

class Todo {

    constructor() {
        this.todo = axios.create({
          baseURL: "http://localhost:4000/api/v1",
          withCredentials: true,
        });
    }

    getAllTodos() {
        return this.todo.get('/todos').then(({ data }) => data)
    }

    getTodo(todoId) {
        return this.todo.get(`/todos/${todoId}`).then(({ data }) => data)
    }

    createTodo(todo) {

        const { title, body } = todo;
        
        return this.todo
            .post('/todos', { title, body })
            .then(({ data }) => data)
    }

    updateTodo({ todoId, title, body }) {
        return this.todo
            .put(`/todos/${todoId}`, { title, body})
            .then(({ data }) => data)
    }

    deleteTodo(todoId) {
        return this.todo.delete(`/todos/${todoId}`).then(({data}) => data)
    }

}

const todoService = new Todo();

export default todoService;