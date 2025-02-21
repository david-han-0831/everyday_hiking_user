import { useState, useEffect } from 'react';

export default function WeatherInfo() {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const cachedWeather = localStorage.getItem('weatherData');
    if (cachedWeather) {
      setWeatherData(JSON.parse(cachedWeather));
    } else {
      fetchWeather();
    }
  }, []);

  async function fetchWeather() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

            if (!apiKey) {
              setErrorMsg('OpenWeatherMap API 키가 설정되지 않았습니다.');
              return;
            }

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=kr&appid=${apiKey}`;
            const res = await fetch(url);
            if (!res.ok) {
              setErrorMsg('날씨 정보를 가져오는 데 실패했습니다.');
              return;
            }

            const data = await res.json();
            localStorage.setItem('weatherData', JSON.stringify(data));
            setWeatherData(data);
            setErrorMsg('');
          } catch (error) {
            setErrorMsg('날씨 정보를 가져오는 중 오류가 발생했습니다.');
          }
        },
        (err) => {
          setErrorMsg('위치 정보 접근이 거부되었거나 오류가 발생했습니다.');
        }
      );
    } else {
      setErrorMsg('이 브라우저에서는 위치 정보가 지원되지 않습니다.');
    }
  }

  const weatherIcon = weatherData?.weather?.[0]?.icon
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : null;

  return (
    <div className="flex items-center space-x-2">
      {weatherData ? (
        <>
          <span>
            {weatherData.main.temp}°C / {weatherData.weather[0].description}
          </span>
          {weatherIcon && (
            <img src={weatherIcon} alt="날씨 아이콘" width={30} height={30} />
          )}
        </>
      ) : (
        <span className="text-sm text-red-500">{errorMsg}</span>
      )}
    </div>
  );
}
