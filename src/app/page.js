"use client";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Everyday Hiking</h1>
      <Link href="/login">로그인</Link> <br />
      <Link href="/signup">회원가입</Link>
    </div>
  );
}
