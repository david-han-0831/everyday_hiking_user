'use client';
import Image from 'next/image';
import kakaoLogin from '../../../../public/image/kakaoLoginButton.svg';

export default function LoginButtons() {
  return (
    <div className="flex flex-col space-y-3 w-full">
      <button
        className="w-full bg-green-500 text-white p-3 rounded-md h-12 hover:bg-green-600 
                         text-sm md:text-base lg:text-lg"
      >
        로그인
      </button>

      <div className="flex flex-col space-y-3">
        <button
          className="w-full flex items-center justify-center bg-[#FEE500] p-3 rounded-[8px] 
                           border border-yellow-500 h-12 hover:opacity-80 transition-opacity 
                           text-sm md:text-base lg:text-lg"
        >
          <Image
            src={kakaoLogin}
            alt="Kakao Login"
            className="h-9 md:h-10 lg:h-12 w-auto"
          />
        </button>

        {/* 네이버 로그인 버튼 (추후 이미지 교체) */}
        <button
          className="w-full flex items-center justify-center bg-green-500 text-white p-3 
                           rounded-[8px] border border-green-600 h-12 hover:bg-green-600 
                           text-sm md:text-base lg:text-lg"
        >
          <Image
            src={kakaoLogin}
            width={20}
            height={20}
            alt="Naver"
            className="mr-2 md:w-6 md:h-6 lg:w-8 lg:h-8"
          />
          네이버 로그인
        </button>

        {/* 구글 로그인 버튼 (추후 이미지 교체) */}
        <button
          className="w-full flex items-center justify-center border border-gray-300 p-3 
                           rounded-[8px] h-12 hover:bg-gray-200 
                           text-sm md:text-base lg:text-lg"
        >
          <Image
            src={kakaoLogin}
            width={20}
            height={20}
            alt="Google"
            className="mr-2 md:w-6 md:h-6 lg:w-8 lg:h-8"
          />
          구글 로그인
        </button>
      </div>
    </div>
  );
}
