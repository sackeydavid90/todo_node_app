//module creation 

const mongoose = require('mongoose');
//importing mongoose to connect to the database
const todoSchema = mongoose.Schema({
    //the tesll
    title: {
        type: String,
        required: true,
        default: 'No title'
    },
    description: {
        type: String,
        required: true,
        default: 'No description'
    },
    deadline: {
        type: Date,
        required: true,
        default: 'No Date'
    },
    isCompleted: {
        type: Boolean,
        required: false// when the person has not added yet completed filling his data.
    }
},// comma for any additional information you want it to have
{timestamps: true});// updates data changes.

    //module creation,model name is todo, 
    const todo = mongoose.model('todo', todoSchema);
    module.exports = todo;

