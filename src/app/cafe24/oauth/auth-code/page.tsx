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
    async function fetchData() {
      if (!(mallId && code)) {
        return;
      }

      const response = await getAceessToken(mallId, code);

      const data = await response?.json();
    }

    fetchData();
  }, []);

  if (data) {
    return <div>{data}</div>;
  }

  return <main>Loading..</main>;
}
