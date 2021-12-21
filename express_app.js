// this is my server built with nodejs express,
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const express = require ('express');//importing express(server) to our variable express.
const res = require('express/lib/response');
const server = express();//refering/calling express to variable server
const mongoose = require('mongoose');// a module that helps the server to connect our data base, through our url
// const mongo_db_url = 'mongodb+srv://Sackeydavid90:salvation19&97@cluster0.wggpz.mongodb.net/todo_db?retryWrites=true&w=majority';
// const mongo_db_url = 'mongodb://localhost/todos_db';

//gives server direct access to our database through our url
const todoController = require ('./controllers/todoController');//set up todoController, and export it to its variable

server.use(express.json());// converts all our bodies in a json format
server.get('/', function(request, response){
    response.status(200).json({success: true, message: 'Welcome, this is David todo node API '})
})       

server.get('/todos' , todoController.getAllTodo);
server.post('/todos' , todoController.insertTodo );
server.put('/todos' , todoController.updateTodo);
server.put('/todos/:id' , todoController.deleteTodoById);// referring to the id
server.delete('/todos' , todoController.deleteTodo);
//todo paths can be seen as part of our url, but note its a parameter.
//means connection must be done first before server sends the type of request to the respective controllers
//listens your local host number and performs the function next to it
server.listen(PORT, function(){
    console.log('server has started to run in express');
    mongoose.connect(process.env.MONGO_DB_ATLAS)//server connects to our database
    .then(function(){//after, .then runs
        console.log('Db is connected');
    
   })
    .catch(function(error){// if there is any problem, .catch should run
        console.log('Db is not connected:', error.message)
    });
})  