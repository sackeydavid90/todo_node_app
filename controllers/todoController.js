
const todo = require('../models/todo'); 
todo.create();// to crate a new document/record,

//creating multiple functions in our controllers
//when you are inserting a todo you insert a particular one but by id.
//you can get all todo's all a single one
function insertTodo(){

}
function updateTodo(){

}
function deleteTodo(){

}
function deleteTodoById(){

}
function getTodoById(){

}
function getAllTodo(){

}

//exporting multiple functions, you export by the name
module.exports = {
    insertTodo, updateTodo, deleteTodo, getTodoById, getAllTodo, deleteTodoById
}