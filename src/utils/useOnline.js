import { useState,useEffect } from "react"

const useOnline=()=>{
    const [isOnline,setUseOnline]=useState(true)

    useEffect(()=>{

        window.addEventListener("online",()=>{
            setUseOnline(true)
        })
        window.addEventListener("offline",()=>{
            setUseOnline(false)
        })

        
    },[])

    return isOnline;
}

export default useOnline;