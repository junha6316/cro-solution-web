"use client"
import { redirect, useSearchParams } from "next/navigation"


export default function Cafe24OAuthPage() {
    const params=useSearchParams()
  
    const mall_id =params.get("mall_id")
    if (mall_id){ 
      const redirectUri = 'https://cro-solution.vercel.app/cafe24/oauth/auth-code'
      const scopes = 'mall.read_application'
      const clientId = 'WMDx27gTAB4sEbvDOBIguB'
      redirect(`https://${mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}`)
    }
    
    return (
      <main>
       
      </main>
    )
  }