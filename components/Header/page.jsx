"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  // 로그인 상태 가져오기
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // 날씨 정보 상태
  const [weatherData, setWeatherData] = useState(null);
  // 에러 메세지 상태
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // 브라우저가 Geolocation API를 지원하는지 확인
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            await fetchWeatherData(latitude, longitude);
          } catch (error) {
            console.error(error);
            setErrorMsg("날씨 정보를 가져오는 중 문제가 발생했습니다.");
          }
        },
        (err) => {
          console.error(err);
          setErrorMsg("위치 정보 접근이 거부되었거나 오류가 발생했습니다.");
        }
      );
    } else {
      setErrorMsg("이 브라우저에서는 위치 정보가 지원되지 않습니다.");
    }
  }, []);

  // OpenWeatherMap API 호출 함수
  async function fetchWeatherData(lat, lon) {
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      if (!apiKey) {
        setErrorMsg("OpenWeatherMap API 키가 설정되지 않았습니다.");
        return;
      }

      // 'units=metric'으로 섭씨 온도, 'lang=kr'로 한글 날씨 설명
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${apiKey}`;
      const res = await fetch(url);
      if (!res.ok) {
        setErrorMsg("날씨 정보를 가져오는 데 실패했습니다.");
        return;
      }
      
      
      const data = await res.json();
      console.log(data);
      setWeatherData(data);
      setErrorMsg("");
    } catch (error) {
      console.error(error);
      setErrorMsg("알 수 없는 에러가 발생했습니다.");
    }
  }

  // weatherData가 있을 때 아이콘 URL 구성
  const weatherIcon = weatherData?.weather?.[0]?.icon
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : null;

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* 로고 영역 */}
        <div className="text-green-600 text-xl font-bold">
          <Link href="/">매일등산</Link>
        </div>

        {/* 네비게이션 영역 */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          {/* "오늘의 날씨" 링크 */}
          <Link href="/weather" className="hover:text-gray-900">
            오늘의 날씨
          </Link>
          
          {/* 간단한 날씨 정보 + 아이콘 */}
          {weatherData && (
            <div className="flex items-center space-x-2">
              <span>
                {weatherData.main.temp}°C / {weatherData.weather[0].description}
              </span>
              {weatherIcon && (
                <img
                  src={weatherIcon}
                  alt="날씨 아이콘"
                  width={30}
                  height={30}
                />
              )}
            </div>
          )}

          <Link href="/community" className="hover:text-gray-900">
            커뮤니티
          </Link>
          <Link href="/store" className="hover:text-gray-900">
            스토어
          </Link>
          <Link href="/review" className="hover:text-gray-900">
            리뷰
          </Link>
        </nav>

        {/* 로그인/마이페이지 버튼 */}
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
      </div>
    </header>
  );
}
