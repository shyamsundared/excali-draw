"use client"
import { useEffect, useRef } from "react"

export default function Canvas(){
    const canvasref=useRef<HTMLCanvasElement>(null);
    useEffect(()=>{
        if(canvasref.current){
            const canvas=canvasref.current;
            const ctx=canvas.getContext("2d");
            if(!ctx){
                return;
            }
            let clicked:Boolean=false;
            let startX=0;
            let startY=0;
            canvas.addEventListener("mousedown",(e)=>{
                clicked=true;
                startX=e.clientX
            })
            canvas.addEventListener("mousemove",(e)=>{
                if(clicked){
                    const width=e.clientX-startX;
                    const height=e.clientY-startY;
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    ctx.fillStyle="rgba(0,0,0)"
                    ctx.fillRect(0,0,canvas.width,canvas.height);
                    ctx.strokeStyle="rgba(255,255,0,0)"
                    ctx.strokeRect(startX,startY,width,height);
                }

            })
            canvas.addEventListener("mouseup",()=>{
                clicked=false;
            })
        }
    },[canvasref])
    return <div>

        <canvas width={1000} height={1000} className="bg-amber-500"></canvas>
    </div>
}