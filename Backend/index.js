// Write basic express boilerplate code,
// write exress.json() middleware

const express = require("express");
const {createTodo, updateTodo} = require("./types")
const { todo } = require("./db");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

/*body{
    title:string,
    discription:String
}*/

app.post("/todo",async function(req,res){

    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success)
    {
        res.status(411).json({
            msg:"you sent a wrong inputs"
        });
        return;
    }
    //put it in mongoDb

   await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false,
    })
    res.json({
        msg:"your TODO is created"
    })

})


app.get("/todos",async function(req,res){
    const todos =await todo.find({}); // promise
    res.json({
        todos
    })
})


app.put("/completed",async (req,res)=>{
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success)
    {
        res.status(411).json({
            msg:"TODO donot exist"
        })
        return;
    }
    //update the todo in the mongoDb
    await todo.update({
        _id:req.body.id
    },{
        completed: true
    })
    res.json({
        msg:"TODO is mark as completed"
    })
})

app.listen(3000);