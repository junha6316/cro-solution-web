"use client";
import { getPermissionURL } from "@/app/cafe24";
import { redirect, useSearchParams } from "next/navigation";
import Cookie from "js-cookie";

export default function Cafe24OAuthPage() {
  const params = useSearchParams();
  const mallId = params.get("mall_id");
  if (mallId) {
    Cookie.set("mallId", mallId);
    redirect(getPermissionURL(mallId));
  }

  return <main></main>;
}
