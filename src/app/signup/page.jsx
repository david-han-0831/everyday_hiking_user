import Image from 'next/image';
import SignupForm from './components/SignupForm';
import signupImage from '../../../public/image/login.svg';

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white border border-gray-300 rounded-lg p-8 flex w-full max-w-4xl h-[550px] mt-[100px] mb-[100px]">
        <SignupForm />

        <div className="w-1/2 hidden md:flex relative">
          <Image
            src={signupImage}
            width={500}
            height={500}
            objectFit="cover"
            alt="Signup Image"
            className="rounded-r-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
