import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const clientId = "WMDx27gTAB4sEbvDOBIguB";
  const clientSecret = "NYaOmRREL5vp5YGFRslfZE";
  const redirectUri = "https://cro-solution.vercel.app/cafe24/oauth/auth-code/";

  try {
    const { mallId, authCode } = await req.json();
    const credentials = `${clientId}:${clientSecret}`;
    const base64Credentials = Buffer.from(credentials).toString("base64");

    const formData = new URLSearchParams();
    formData.append("grant_type", "authorization_code");
    formData.append("code", authCode);
    formData.append("redirect_uri", redirectUri);

    const response = await fetch(
      `https://${mallId}.cafe24api.com/api/v2/oauth/token`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );
    const data = await response.json();

    return NextResponse.json({
      ...data,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json({});
  }
}
