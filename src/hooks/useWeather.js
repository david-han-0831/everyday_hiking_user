import { useContext } from 'react';
import { WeatherContext } from '../components/Header/components/WeatherProvider';

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error(
      'useWeather()는 WeatherProvider 내부에서만 사용해야 합니다.'
    );
  }
  return context;
}
