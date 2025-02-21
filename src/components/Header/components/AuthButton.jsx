import Link from 'next/link';

export default function AuthButton({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <Link
          href="/mypage"
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full shadow-sm hover:bg-gray-200"
        >
          마이페이지
        </Link>
      ) : (
        <Link
          href="/login"
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full shadow-sm hover:bg-gray-200"
        >
          로그인
        </Link>
      )}
    </div>
  );
}
