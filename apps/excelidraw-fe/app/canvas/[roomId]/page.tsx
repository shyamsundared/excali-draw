"use client"
import { draw } from "@/draw/canvas";
import { useEffect, useRef } from "react"

export default function Canvas(){
    const canvasref=useRef<HTMLCanvasElement>(null);
    useEffect(()=>{
       
            const canvas=canvasref.current;
            if(!canvas){
                return
            }
            draw(canvas);
            
},[canvasref])
    return <div>

        <canvas width={1000} height={1000}></canvas>
    </div>
}