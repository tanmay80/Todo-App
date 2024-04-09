const {todo} = require("./db")
const {createTodo, updateTodo} = require("./types");

const express=require("express")
const cors=require("cors");
const app=express();


app.use(cors());
app.use(express.json());

//To post a Todo
app.post("/todo",async (req,res)=>{
    const createdTodo=req.body;
    const parsedTodo=createTodo.safeParse(req.body);
    if(!parsedTodo.success){
        res.status(411).json({
            message:"Wrong inputs"
        })
        return;
    }else{

        await todo.create({
            title:createdTodo.title,
            description: createdTodo.description,
            completed : false
        })

        res.status(200).json({
            message:"Todo Created"
        })
    }
})

//To get all Todo
app.get("/todos",async (req,res)=>{
    
    const todos=await todo.find({});
    res.json({
        todos
    })

})

//To mark a Todo Completed
app.put("/completed",(req,res)=>{
    const parsedUpdatedTodo=updateTodo.safeParse(req.body);
    if(!parsedUpdatedTodo.success){
        res.status(411).json({
            message:"Wrong inputs"
        })
        return;
    }else{

        todo.update({
            _id : req.body.id
        },{
            completed:true
        })

        req.status(200).json({
            message:"Todo Completed"
        })
    }
})


app.listen(3000);