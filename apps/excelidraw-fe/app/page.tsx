import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-screen h-screen bg-amber-100 flex justify-center items-center" >
     <Link href={'/signin'}>
     <button className="pr-2 bg-slate-600">
          signin
      </button></Link>
      <Link href={'/signup'}>
       <button className="pl-2 bg-slate-800">
            signup
      </button></Link>
     
    </div>
  );
}
