"use client"

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket"

export function ChatRoomClient({messages,id}:{
    messages:{message:string}[],
    id:string

}){ const [chats,setchats]=useState(messages);
    const {socket,loading}=useSocket();
    const [currentMessage,setcurrentMessage]=useState("")
    useEffect(()=>{
        
        if(socket && !loading){
            socket.send(JSON.stringify({
                type:"join_room",
                roomId:id
            }));
            socket.onmessage =(event)=>{
                const parsedData=JSON.parse(event.data);
                if(parsedData.type==="chat"){
                    setchats(c => [...c,parsedData.message])
                }
            }
        }
    },[loading,socket,id])
    return <div>
        {messages.map(m=><li >
            {m.message}
        </li>)}
        <input type="text" name="" id="" value={currentMessage} onChange={(e)=>setcurrentMessage(e.target.value)}/>
        <button onClick={()=>{
            socket?.send(JSON.stringify({
                type:"chat",
                roomId:id,
                message:currentMessage
            }))
            setcurrentMessage("")
        }}>send message</button>
    </div>
    
}