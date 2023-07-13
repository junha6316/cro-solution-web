import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const clientId = "WMDx27gTAB4sEbvDOBIguB";
  const clientSecret = "NYaOmRREL5vp5YGFRslfZE";
  const redirectUri = "https://cro-solution.vercel.app/cafe24/oauth/redirect/";

  try {
    const { mallId, authCode } = await req.json();
    const credentials = `${clientId}:${clientSecret}`;
    const base64Credentials = Buffer.from(credentials).toString("base64");

    const response = await fetch(
      `https://6f0c-121-130-230-101.ngrok-free.app/apis/account/oauth/cafe24`,
      {
        method: "POST",
        body: JSON.stringify({
          mall_id: mallId,
          auth_code: authCode,
        }),
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
