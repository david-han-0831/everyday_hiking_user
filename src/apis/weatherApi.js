import axios from 'axios';

export async function fetchWeatherData(lat, lon) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    if (!apiKey) throw new Error('OpenWeatherMap API 키가 설정되지 않았습니다.');

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${apiKey}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('날씨 API 에러:', error);
    return null;
  }
}
