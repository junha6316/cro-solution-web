

export const getAuthCode = async (mall_id: string) => {
    try{
        const res = await fetch(`https://${mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=WMDx27gTAB4sEbvDOBIguB&redirect_uri=https://cro-solution.vercel.app/oauth&scope=mall.read_application`)
        console.log(res.text())
    }
    catch(err){
        console.log(err)
    }
    return
}