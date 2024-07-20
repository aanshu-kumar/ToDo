import { useState } from "react"

function CreateTodo(){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    return(
        <div>
            <input onChange={(e)=>{
                const value = e.target.value;
                setTitle(value);
            }}
            type="text" placeholder="Title"></input><br/><br/>
            <input onChange={(e)=>{
                const value = e.target.value;
                setDescription(value);
            }}
             type="text" placeholder="Description"></input><br/><br/>

            <button onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(async function (res){
                    const json = await res.json();
                })
            }}>Add a Todo</button>
            
        </div>
    )
}

export default CreateTodo