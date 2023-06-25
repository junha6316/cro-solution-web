import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { shop_no, accessToken, src, mallId } = await req.json();
    const response = await fetch(
      `https://${mallId}.cafe24api.com/api/v2/admin/scripttags`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "X-Cafe24-Api-Version": " 2023-06-01",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          shop_no,
          request: {
            src,
            display_location: ["all"],
          },
        }),
      }
    );
    const data = await response.json();
    return NextResponse.json({
      ...data,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({});
  }
}
