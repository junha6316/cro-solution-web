"use client"
import { redirect, useSearchParams } from "next/navigation"


export default function GetAuthCodePage() {
    const params=useSearchParams()
  
    const code =params.get("code")
    console.log(code)
    
    return (
      <main>
       
      </main>
    )
  }