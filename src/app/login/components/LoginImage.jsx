'use client';
import Image from 'next/image';
import loginImage from '../../../../public/image/login.svg';

export default function LoginImage() {
  return (
    <div className="w-1/2 hidden md:flex relative h-full">
      <Image
        src={loginImage}
        layout="fill"
        objectFit="cover"
        alt="Login Image"
        className="rounded-l-lg"
      />
    </div>
  );
}
