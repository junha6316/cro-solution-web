"use client";
import { getAceessToken } from "@/app/cafe24";
import { redirect, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function GetAuthCodePage() {
  const [data, setData] = useState(null);
  const params = useSearchParams();
  const code = params.get("code");
  const mallId = Cookies.get("mallId");

  useEffect(() => {
    const body = {
      mallId: "yourMallId",
      authCode: "yourAuthCode",
    };

    fetch("/api/cafe24/getAccessToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  if (data) {
    return <div>{data}</div>;
  }

  return <main>Loading..</main>;
}
