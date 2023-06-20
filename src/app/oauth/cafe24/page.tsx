"use client"
import { redirect, useSearchParams } from "next/navigation"


export default function Cafe24OAuthPage() {
    const params=useSearchParams()
  
    const mall_id =params.get("mall_id")
    if (mall_id){  
      redirect(`https://${mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=WMDx27gTAB4sEbvDOBIguB&redirect_uri=https://cro-solution.vercel.app/oauth/cafe24/auth-code&scope=mall.read_application`)
    }
    
    return (
      <main>
       
      </main>
    )
  }