"use client";

import Cookies from "js-cookie";

export default function Cafe24OSetScriptsPage() {
  const handleClick = async () => {
    try {
      const mallId = Cookies.get("mallId");
      const shop_no = Cookies.get("shop_no");
      const accessToken = Cookies.get("access_token");
      const response = await fetch("/api/cafe24/scripts", {
        method: "POST",
        body: JSON.stringify({
          shop_no,
          accessToken,
          mallId,
          src: "https://rockettools-test.s3.ap-northeast-2.amazonaws.com/test.js",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>스크립트 연동하기</button>
    </div>
  );
}
