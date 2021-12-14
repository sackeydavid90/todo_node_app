// this is my server built with nodejs express,

const express = require ('express');//importing express
const server = express();//refering server to express
const todoController = require ('./controllers/todoController');//todoController exported
const mongoose = require('mongoose');
const mongo_db_url = 'mongodb+srv://Sackeydavid90:salvation19&97@cluster0.wggpz.mongodb.net/todo_db?retryWrites=true&w=majority';

server.get('/todos' , todoController.getAllTodo);
server.post('/todos' , todoController.insertTodo );
server.put('/todos' , todoController.updateTodo);
server.delete('/todos' , todoController.deleteTodo);

server.listen(4000, function(){
    console.log('server has started to run in express');
    mongoose.connect(mongo_db_url)
    .then(function(){
        console.log('Db is connected');
   })
.catch(function(error){
    console.log('Db is not connected:', error.message)
});
    
})  