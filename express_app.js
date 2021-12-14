const express = require ('express');
const server = express();//
const mongoose = require('mongoose');``
const mongo_db_url = 'mongodb+srv://Sackeydavid90:salvation@19&97@cluster0.wggpz.mongodb.net/todo_db?retryWrites=true&w=majority';

server.get('student' , function(request, response){
response.status(200).json('All task has been given');
});
server.post('student' , function(request, response){
response.status(200).json('All our new task');
});
server.put('student' , function(request, response){
response.status(200).json('Update task');
});
server.delete('student' , function(request, response){
response.status(200).json('Delete a task');
});

server.listen(4000, function(){
    console.log('server has started to run in express');
})