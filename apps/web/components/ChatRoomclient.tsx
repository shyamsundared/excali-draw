"use client"

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket"

export function ChatRoomClient({messages,id}:{
    messages:{message:string}[],
    id:string

}){ const [chats,setchats]=useState(messages);
    const {socket,loading}=useSocket();
    useEffect(()=>{
        if(socket && !loading){
            socket.onmessage =(event)=>{
                const parsedData=JSON.parse(event.data);
                if(parsedData.type==="chat"){
                    setchats(c => [...c,parsedData.message])
                }
            }
        }
    })
}