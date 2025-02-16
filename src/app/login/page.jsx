'use client';
import LoginImage from './components/LoginImage';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white border border-gray-300 rounded-lg p-8 flex flex-col w-full max-w-4xl mt-[100px] mb-[100px]">
        <div className="flex w-full h-[550px]">
          <LoginImage />

          <div className="w-1/2 flex flex-col justify-between p-6 h-full">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
