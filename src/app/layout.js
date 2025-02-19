'use client';
import Header from '../components/Header/page';
import { WeatherProvider } from '../components/Header/components/WeatherProvider';
import Footer from '../components/Footer/page';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Provider store={store}>
          {' '}
          {/*유저 정보 전역에서 관리 */}
          <div className="flex flex-col min-h-screen">
            <WeatherProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </WeatherProvider>
          </div>
        </Provider>
      </body>
    </html>
  );
}
