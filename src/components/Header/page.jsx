import React from 'react';
import CustomHeader from './components/CustomHeader';
import { WeatherProvider } from './components/WeatherProvider';

export default function Page() {
  return (
    <WeatherProvider>
      <CustomHeader />
      <main style={{ padding: '3rem' }}></main>
    </WeatherProvider>
  );
}
