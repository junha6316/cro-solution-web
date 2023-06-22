import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// pages/api/getAccessToken.ts
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const clientId = "WMDx27gTAB4sEbvDOBIguB";
  const clientSecret = "NYaOmRREL5vp5YGFRslfZE";
  const redirectUri = "https://cro-solution.vercel.app/cafe24/oauth/auth-code/";

  const { mallId, authCode } = req.body;

  try {
    const credentials = `${clientId}:${clientSecret}`;
    const base64Credentials = Buffer.from(credentials).toString("base64");

    const response = await fetch(
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

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch access token" });
  }
}
