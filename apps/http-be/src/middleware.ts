import {Request,Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "./config";
export const auth=(req:Request,res:Response,next:NextFunction)=>{
    const token=req.headers['authorization']??""
    const decoded=jwt.verify(token,JWT_SECRET);
    
    if(!decoded || !(decoded as JwtPayload).userId){
        return res.json({message:'not right type'})
    }
    req.userId=(decoded as JwtPayload).userId
    next();

}