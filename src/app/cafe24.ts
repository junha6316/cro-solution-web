import Cookies from "js-cookie";

let clientId = "WMDx27gTAB4sEbvDOBIguB";
let clientSecret = "NYaOmRREL5vp5YGFRslfZE";
let redirectUri = "https://cro-solution.vercel.app/cafe24/oauth/redirect/";

const scopes =
  "mall.read_application mall.write_application mall.read_customer mall.read_store";

/** cafe24 url을 가져옴 */
export const getPermissionURL = (mall_id: string) =>
  `https://${mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}`;

/**
 * 액세스 토큰을 가져오는 API
 * @param mallId
 * @param authCode
 * @returns
 */
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

/**
 * 스크립트 태그를 설치하는 API
 * @param mallId
 * @param shop_no
 * @param src
 */
export const addScriptTags = async (
  mallId: string,
  shop_no: number,
  src: string
) => {
  try {
    const accessToken = Cookies.get("accessToken");
    const res = await fetch(
      `https://${mallId}.cafe24api.com/api/v2/admin/scripttags`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "X-Cafe24-Api-Version": "2023-06-01",
        },
        body: JSON.stringify({
          shop_no,
          src,
          display_location: "all",
        }),
      }
    );
    return res;
  } catch (err) {
    console.log(err);
    return;
  }
};
