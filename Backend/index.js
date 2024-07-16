// Write basic express boilerplate code,
// write exress.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("../types");

const app = express();
app.use(express.json());

/*body{
    title:string,
    discription:String
}*/

app.post("/todo",function(req,res){

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

})


app.get("/todos",function(req,res){

})


app.put("/completed",(req,res)=>{
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
})