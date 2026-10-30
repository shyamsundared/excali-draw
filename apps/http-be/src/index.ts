import express from "express"
const app=express();
import z, { success } from "zod"
import {auth} from "./middleware";
import { user_schema } from "./zodschema";
app.listen(3000,()=>{
    console.log('app is running')
})
app.use(express.json())
app.post('/api/signup',(req,res)=>{
    
    const result=user_schema.safeParse(req.body);
    if(!result.success){
        res.json({error:"invalid username | password"});
        return;
    }
    const {username,password}=result.data;
    console.log(username)
    return res.json("pp")
})
app.post('/api/signin',(req,res)=>{
    const result=user_schema.safeParse(req.body);
    if(!result.success){
        res.json({error:"invalid username | password"});
        return;
    }
    const {username,password}=result.data;
    
})
app.post('/api/createroom',auth,(req,res)=>{

})