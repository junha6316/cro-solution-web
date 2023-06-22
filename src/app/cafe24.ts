let clientId = "WMDx27gTAB4sEbvDOBIguB";
let clientSecret = "NYaOmRREL5vp5YGFRslfZE";
let redirectUri = "https://cro-solution.vercel.app/cafe24/oauth/redirect/";

const scopes = "mall.read_application";

/** cafe24 url을 가져옴 */
export const getPermissionURL = (mall_id: string) =>
  `https://${mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}`;

export const getAceessToken = async (mallId: string, authCode: string) => {
  try {
    const credentials = `${clientId}:${clientSecret}`;
    const base64Credentials = Buffer.from(credentials).toString("base64");
    const res = await fetch(
      `https://${mallId}.cafe24api.com/api/v2/oauth/token`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          "grant-type": "authorization_code",
          code: authCode,
          redirect_uri: redirectUri,
        }),
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
  return;
};
