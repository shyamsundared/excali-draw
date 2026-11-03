export function AuthPage({isSignin}:{
    isSignin:boolean
}){
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-2 m-2 bg-amber-400 w-55 text-black">
            <div className="m-2 "> <input type="text" placeholder="email"/></div>
           <div className="m-2"><input type="password" placeholder="password" /></div>
        
       <div className="m-2"><button onClick={()=>{

        }}>{isSignin?"sign in":"sign up"}</button></div> 
        </div>
        </div>
    
}