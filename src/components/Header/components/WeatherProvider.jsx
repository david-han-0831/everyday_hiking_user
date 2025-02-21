import { createContext, useEffect, useState } from 'react';
import { fetchWeatherData } from '../../../../src/apis/weatherApi';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(() => {
    const savedData = localStorage.getItem('weatherData');
    return savedData ? JSON.parse(savedData) : null;
  });

  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const loadWeather = async () => {
      const storedWeather = localStorage.getItem('weatherData');
      const storedTime = localStorage.getItem('weatherTime');

      if (storedWeather && storedTime) {
        const timeDiff = Date.now() - parseInt(storedTime, 10);
        if (timeDiff < 1800000) {
          setWeatherData(JSON.parse(storedWeather));
          return;
        }
      }

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const data = await fetchWeatherData(latitude, longitude);
            if (data) {
              setWeatherData(data);
              localStorage.setItem('weatherData', JSON.stringify(data));
              localStorage.setItem('weatherTime', Date.now().toString());
              setErrorMsg('');
            } else {
              setErrorMsg('날씨 정보를 가져오는 데 실패했습니다.');
            }
          },
          (err) => {
            console.error(err);
            setErrorMsg('위치 정보 접근이 거부되었습니다.');
          }
        );
      } else {
        setErrorMsg('이 브라우저에서는 위치 정보를 지원하지 않습니다.');
      }
    };

    loadWeather();
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData, errorMsg }}>
      {children}
    </WeatherContext.Provider>
  );
}
