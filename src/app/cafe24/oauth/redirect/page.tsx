"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Cafe24OAuthRedirectPage() {
  const params = useSearchParams();
  const { push } = useRouter();

  const [data, setData] = useState({});

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
      .then((data) => {
        for (const key in data) {
          Cookies.set(key, data[key]);
        }
        push("/cafe24/scripts/");
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (Object.keys(data).length !== 0) {
    return <div>Get Access Token Success</div>;
  }

  return <main>Loading..</main>;
}
