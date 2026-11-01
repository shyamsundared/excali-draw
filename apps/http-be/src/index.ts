import express from "express"
const app=express();
import z, { success } from "zod"
import {auth} from "./middleware";
import{createuserschema,signinschema,createroomschema} from "@repo/common/types"
import {db} from "@repo/db"
app.listen(3000,()=>{
    console.log('app is running')
})
app.use(express.json())
app.post('/api/signup',async (req,res)=>{
    
    const result=createuserschema.safeParse(req.body);
    if(!result.success){
        res.json({error:"invalid username | password"});
        return;
    }
    const {email,password,name}=result.data;
    try{
    const resp=await db.orm.public.User.create({
       email,
       password,
       name
    })}
    catch{
        res.status(411).json({
            error:"email already exists"
        })
        return;
    }
    //console.log(username)
    return res.json("pp")
})
app.post('/api/signin',(req,res)=>{
    const result=signinschema.safeParse(req.body);
    if(!result.success){
        res.json({error:"invalid username | password"});
        return;
    }
    const {username,password}=result.data;
    
})
app.post('/api/createroom',auth,(req,res)=>{
    const result=createroomschema.safeParse(req.body)
})