import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const clientId = "WMDx27gTAB4sEbvDOBIguB";
  const clientSecret = "NYaOmRREL5vp5YGFRslfZE";
  const redirectUri = "https://cro-solution.vercel.app/cafe24/oauth/auth-code/";

  try {
    const { mallId, authCode } = await req.json();
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
          grant_type: "authorization_code",
          code: authCode,
          redirect_uri: redirectUri,
        }),
      }
    );

    console.log(
      JSON.stringify({
        grant_type: "authorization_code",
        code: authCode,
        redirect_uri: redirectUri,
      })
    );

    const data = await response.json();
    console.log(data);

    return NextResponse.json({
      ...data,
      test: JSON.stringify({
        grant_type: "authorization_code",
        code: authCode,
        redirect_uri: redirectUri,
      }),
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json({});
  }
}