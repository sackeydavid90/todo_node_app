//module creation

const mongoose = require('mongoose');
//importing mongoose to connect to the database
const todoSchema = mongoose.Scheme({
    title: String,
    description: String,
    deadline: Date,
    isCompleted: Boolean
},
{timstamp: true});// updated is when it was changed.

    //module creation,model name is todos, 
    const todos = mongoose.model('todos', todoSchema);
    module.exports = todo;

