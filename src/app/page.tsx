"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { redirect, useRouter, useSearchParams } from "next/navigation";

export default function TestPage() {
  const { push } = useRouter();

  return (
    <main>
      <button onClick={() => push("/cafe24/scripts/")}>test button</button>
    </main>
  );
}
