"use client";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); //  로그인 상태 가져오기

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-green-600 text-xl font-bold">
          <Link href="/">매일등산</Link>
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/weather" className="hover:text-gray-900">오늘의 날씨</Link>
          <Link href="/community" className="hover:text-gray-900">커뮤니티</Link>
          <Link href="/store" className="hover:text-gray-900">스토어</Link>
          <Link href="/review" className="hover:text-gray-900">리뷰</Link>
        </nav>

        <div>
          {isLoggedIn ? (
            <Link href="/mypage" className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full shadow-sm hover:bg-gray-200">
              마이페이지
            </Link>
          ) : (
            <Link href="/login" className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full shadow-sm hover:bg-gray-200">
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>   
  );  
}
