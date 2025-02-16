'use client';
import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import SignupInputs from './signupInputs';
import SignupStepOne from './SignupStepOne';
import SignupStepTwo from './SignupStepTwo';

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const inputs = useMemo(() => SignupInputs(), []);

  const {
    register,
    handleSubmit,
    watch,
    formState,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log('회원가입 정보:', data);
  };

  return (
    <div className="w-1/2 flex flex-col justify-center p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">회원가입</h2>
      {step === 1 ? (
        <SignupStepOne register={register} errors={formState.errors} inputs={inputs} onNext={() => setStep(2)} formState={formState} />
      ) : (
        <SignupStepTwo register={register} errors={formState.errors} inputs={inputs} handleSubmit={handleSubmit} onSubmit={onSubmit} formState={formState} />
      )}
    </div>
  );
}
