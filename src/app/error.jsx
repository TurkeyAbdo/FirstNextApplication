"use client"

import { useEffect } from "react"

export default function error({error ,reset}) {

    useEffect(() => {
        console.log(error)        
    },[error])
    return (
    <div className="text-center p-4">
        <h1>this is an error message</h1>
        <button onClick={() => reset()} className="bg-amber-400 cursor-pointer hover:bg-amber-500 rounded p-2 mt-5 ">Reset</button>
    </div>
  )
}
