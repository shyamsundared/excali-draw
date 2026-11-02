import express from "express"
const app=express();
import z, { } from "zod"
import jwt from "jsonwebtoken"
import {auth} from "./middleware";
import{createuserschema,signinschema,createroomschema} from "@repo/common/types"
import {db} from "@repo/db"
import { JWT_SECRET } from "@repo/backend-common/config";
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
app.post('/api/signin',async (req,res)=>{
    const result=signinschema.safeParse(req.body);
    if(!result.success){
        res.json({error:"invalid username | password"});
        return;
    }
    const {email,password}=result.data;
    const user=await db.orm.public.User.first({
        email,
        password
    })
    if(!user){
        res.status(403).json({
            messafe:"usernot found"
        })
        return;
    }
    const token=jwt.sign({
        userId:user.id

    },JWT_SECRET)
    res.json({
        token
    })
    
})
app.post('/api/createroom',auth,async (req,res)=>{
    const result=createroomschema.safeParse(req.body)
    if(!result.success){
        res.json({
            error:"incorrect input"
        })
        return
    }//@ts-ignore
    const userId=req.userid;
    try{
    const room =await db.orm.public.Room.create({
        
        slug:result.data?.name,
        adminId:userId
    })
    res.json({
        roomId:room.id
    })
}
    catch{
        res.status(411).json({
            messafe:"room already exists"
        })
        return;
    }
    
    
})
app.get('/chats/:roomId',async (req,res)=>{
    const roomId=Number(req.params.roomId);
    const messages=await db.orm.public.Chat.where({roomId}).orderBy((chat)=>chat.id.desc()).limit(50).all();
    res.json({
        messages
    })
})  