import { customAxiosTodo } from './customAxiosTodo';

export const todoApi = {
    getTodos: () => customAxiosTodo().get('/todos'),
    getTodoById: (id:string) => customAxiosTodo().get('/todos/id'),
    createTodo: (title:string, content:string) => customAxiosTodo().post('/todos', {
        title: title,
        content: content
    }),
    updateTodo: (title:string, content:string) => customAxiosTodo().put('/todos/id', {
        title: title,
        content: content
    }),
    deleteTodo: ()=> customAxiosTodo().delete('/todos/id')
}