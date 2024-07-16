const mongoose = require("mongoose");
/*
   Todo{
   title: string,
   descriptioin: string,
   completed: boolean
}
*/
mongoose.connect("mongodb://localhost:27017/TodoApp")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo // you can write this to shorten the syntex.... if the key and value are same
}