import express from "express"

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("hello world") 
})

app.post("register",(req , res)=>{
    res.sendStatus(200)
})
app.put("register",(req , res)=>{
    res.sendStatus(200)
})
app.patch("register",(req , res)=>{
    res.sendStatus(200)
})
app.delete("register",(req , res)=>{
    res.sendStatus(200)
})


app.listen(port,()=>{
    console.log(`sever is running at http://localhost:${port}/`)
})



