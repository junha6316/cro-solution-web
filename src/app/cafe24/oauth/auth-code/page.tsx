"use client";
import { getAceessToken } from "@/app/cafe24";
import { redirect, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function GetAuthCodePage() {
  const params = useSearchParams();
  const code = params.get("code");

  console.log(Cookies.get("mallId"));

  return <main></main>;
}
