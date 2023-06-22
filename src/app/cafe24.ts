let clientId = "WMDx27gTAB4sEbvDOBIguB";
let clientSecret = "NYaOmRREL5vp5YGFRslfZE";
let redirectUri = "https://cro-solution.vercel.app/cafe24/oauth/auth-code/";

const scopes = "mall.read_application";

/** cafe24 url을 가져옴 */
export const getPermissionURL = (mall_id: string) =>
  `https://${mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}`;

export const getAceessToken = async (mall_id: string, authCode: string) => {
  try {
    const res = await fetch(
      `https://${mall_id}.cafe24api.com/api/v2/oauth/token`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${authCode}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          "grant-type": "authorization",
          code: authCode,
          redirect_uri: redirectUri,
        }),
      }
    );
  } catch (err) {
    console.log(err);
  }
  return;
};
