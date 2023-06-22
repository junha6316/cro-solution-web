"use client";
import { getAceessToken } from "@/app/cafe24";
import { redirect, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function GetAuthCodePage() {
  const [data, setData] = useState({});
  const params = useSearchParams();

  useEffect(() => {
    const authCode = params.get("code");
    const mallId = Cookies.get("mallId");

    fetch("/api/cafe24/getAccessToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mallId,
        authCode,
      }),
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  if (Object.keys(data).length !== 0) {
    console.log(data);
    return <div>data</div>;
  }

  return <main>Loading..</main>;
}
