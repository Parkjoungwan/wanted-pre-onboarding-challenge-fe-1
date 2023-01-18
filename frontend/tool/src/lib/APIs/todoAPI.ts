import { customAxiosTodo } from '../customAxiosBase/customAxiosTodo';

export const todoApi = {
    getTodos: () => customAxiosTodo().get('/todos'),
    getTodoById: (id:string) => customAxiosTodo().get('/todos/' + id),
    createTodo: (title:string, content:string) => customAxiosTodo().post('/todos', {
        title: title,
        content: content
    }),
    updateTodo: (id:string, title:string, content:string) => customAxiosTodo().put('/todos/' + id, {
        title: title,
        content: content
    }),
    deleteTodo: (id:string)=> customAxiosTodo().delete('/todos/' + id)
}