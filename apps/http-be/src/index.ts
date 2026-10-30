import express from "express"
const app=express();
import z, { success } from "zod"
import {auth} from "./middleware";
import {createuserschema,signinschema,createroomschema} from "@repo/common"
app.listen(3000,()=>{
    console.log('app is running')
})
app.use(express.json())
app.post('/api/signup',(req,res)=>{
    
    const result=signinschema.safeParse(req.body);
    if(!result.success){
        res.json({error:"invalid username | password"});
        return;
    }
    const {username,password}=result.data;
    console.log(username)
    return res.json("pp")
})
app.post('/api/signin',(req,res)=>{
    const result=createuserschema.safeParse(req.body);
    if(!result.success){
        res.json({error:"invalid username | password"});
        return;
    }
    const {username,password}=result.data;
    
})
app.post('/api/createroom',auth,(req,res)=>{
    const result=createroomschema.safeParse(req.body)
})