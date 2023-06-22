

let clientId = 'WMDx27gTAB4sEbvDOBIguB'
let clientSecret = 'NYaOmRREL5vp5YGFRslfZE'
let redirect_uri = 'https://cro-solution.vercel.app/cafe24/oauth/auth-code/'

export const getAuthCode = async (mall_id: string) => {
    try{
        const res = await fetch(`https://${mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirect_uri}&scope=mall.read_application`)
        
    }
    catch(err){
        console.log(err)
    }
    return
}

export const getAceessToken = async (mall_id: string, authCode: string) => {
    try{
        const res = await fetch(`https://${mall_id}.cafe24api.com/api/v2/oauth/token`, {
            method: "POST",
            headers: {
                "Authorization": `Basic ${authCode}`,
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
              'grant-type':'authorization',
              'code': authCode,
              'redirect_uri': redirect_uri
            })})
    } catch(err){
        console.log(err)
    }
    return
}