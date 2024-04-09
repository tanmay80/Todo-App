const mongoose=require("mongoose")

mongoose.connect('mongodb+srv://tanmayaswal80:CozhNFuXZHRka3SR@cluster0.2em89tf.mongodb.net/TodoDatabase');

const todoSchema= mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('TodoDatab',todoSchema);

module.exports={
    todo:todo
}