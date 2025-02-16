'use client';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import SigninInputs from './signinInputs';
import LoginButtons from './LoginButtons';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const inputs = SigninInputs();

  const onSubmit = (data) => {
    console.log('로그인 시도:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-grow mt-2"> 
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center"> 
        로그인
      </h2>

      <div className="mb-2"> 
        <label className="block text-gray-700 text-sm mb-1"> 
          {inputs.email.options.label}
        </label>
        <input
          {...register('email', inputs.email.validate)}
          {...inputs.email.attributes}
          className={`w-full p-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
        />
        <p className="text-red-500 text-sm h-4 mt-1">{errors.email?.message || ''}</p>
      </div>

      <div className="mb-3"> 
        <label className="block text-gray-700 text-sm mb-1">
          {inputs.password.options.label}
        </label>
        <input
          {...register('password', inputs.password.validate)}
          {...inputs.password.attributes}
          className={`w-full p-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
        />
        <p className="text-red-500 text-sm h-4 mt-1">{errors.password?.message || ''}</p>
      </div>

      <div className="mb-4 text-center"> 
        <p className="text-gray-600 text-sm">
          계정이 없으신가요?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            회원가입
          </Link>
        </p>
      </div>

      <div className="mt-2"> 
        <LoginButtons />
      </div>
    </form>
  );
}
