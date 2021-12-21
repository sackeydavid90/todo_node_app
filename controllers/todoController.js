
//my controllers - 

const { request, response } = require('express');
const todo = require('../models/todo'); //model importation using the right path
//creating multiple functions in our controllers
//when you are inserting a todo you insert a particular one but by id.
//you can get all todo's all a single one
function insertTodo(request, response){
    // curlybraces depicts the object.getting the whole data from the body in one line and have access to them one by one.
    const {title, description, deadline, isCompleted} = request.body;
    console.log(request.body);//to log the request data being sent from the client to the server, 
    //body holds the jason data being sent the server
    //request will help you have assess to the jason data in your body
    //create a todo that chains to .then and .catch
    //get what ever data in the body in json format
    
    //{await
    //used to create a new object model.
    //Creates(a function) a new document(its more like a map{'key':'value'} or a list of maps,)
    //since its the client that is going to input the data, we shall make changes to the below
    //     title: 'My todo title',
    //     description: 'My todo desc',
    //     deadline: '2021-12-14',
    //     isCompleted: false,
    
    // }
    //in making a call to database, it takes time for execution to run
    todo.create(request.body)
    .then(function(){// if call is successful execute
        response.status(200).json('Data has been created');

    })
    .catch(function(error){// if call is not successful
        response.status(401).json('Note created:'+ error.message)
    });
}
function updateTodo(){
// to obtain the data and make changes use the try and catch method


    const {id} = request.params;
    const {isCompleted} = request.body;
    todo.findByIdAndDelete(id, {isCompleted})
    .then(function(){
        request.status(200).json({success: true, message: 'Todo is updated successfully', data}); // data is stored here.
    }).catch(function(){
        console.log('cant delete todo: ', error.message);
        response.status(404).json({success: false, message: 'cant update todo. please check your internet connection'})
    })


}
function deleteTodo(){

}
function deleteTodoById(){
    const {id} = request.params.id;
    todo.findByIdAndDelete(id)
    .then(function(){
        request.status(200).json({success: true, message: 'Todo is deleted successfully'});
    }).catch(function(){
        console.log('cant delete todo: ', error.message);
        response.status(404).json({success: false, message: 'cant delete todo. please check your internet connection'})
    })

}
function getTodoById(request, response){
    const id = request.params;
    console.log(request.params.id)
    //const { id } = request.params;
    todo.find(id)
    .then(function(Data){
        response.status(200).json({success: true, message: 'Data is succeffuly created', data});
    }
    .catch (function(error){// if call is not successful
        response.status(401).json({success: false, message: 'Note created:'+ error.message})
    })
)

}
function getAllTodo(request, response){//getting all your todos
    // asynchronous functions takes time to run

    todo.find({})// you can specify your criteria, unspecified criteria leave it blank
    .then(
        function(data){// if call is successful execute
            response.status(200).json({success: true, message: 'Data is succeffuly created', data});
        }
    )
    .catch (function(error){// if call is not successful
        response.status(401).json({success: false, message: 'Note created:'+ error.message})
    });

 
}

//exporting multiple functions, you export by the name
module.exports = {
    insertTodo, updateTodo, deleteTodo, getTodoById, getAllTodo, deleteTodoById
}