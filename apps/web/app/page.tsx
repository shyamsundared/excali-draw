"use client"
import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useState } from "react";
import {useRouter }from "next/navigation"
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  const [roomid,setroomId]=useState("")
  const router=useRouter();
  return (
   <div className="flex bg-gray-900 justify-center items-center w-screen h-screen">
      <input type="text" className="text-blue-50 p-10" value={roomid} onChange={(e)=>setroomId(e.target.value)} placeholder="room id"/>
      <button className="text-blue-50 p-10" onClick={()=>{
        router.push(`/room/${roomid}`)
      }}>join room</button>
   </div>
  );
}
