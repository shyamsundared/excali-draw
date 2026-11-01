import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
const wss=new WebSocketServer({port:8080})

function checkUser(token:string):null|string{
    const decoded=jwt.verify(token,JWT_SECRET);
    if(typeof decoded =="string"){
        return null;
    }
    if(!decoded || !decoded.userId){
        return null;
    }
    return decoded.userId;
}
wss.on("connection",function connection(ws,request){
    const url=request.url;
    if(!url){
        return;
    }
    const queryparams=new URLSearchParams(url.split('?')[1]);
    const token=queryparams.get('token')?? "";
    const userauth=checkUser(token);
    if(!userauth){
        ws.close();
    }
    
    ws.on("message",function message(){
        ws.send("pong");
    })
})