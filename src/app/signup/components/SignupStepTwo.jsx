import FormInput from './FormInput';

export default function SignupStepTwo({ register, errors, inputs, handleSubmit, onSubmit, formState }) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <FormInput
        label={inputs.phone.options.label}
        register={register}
        name="phone"
        errors={errors}
        attributes={inputs.phone.attributes}
        validate={inputs.phone.validate}
      />
      
      <FormInput
        label={inputs.nickname.options.label}
        register={register}
        name="nickname"
        errors={errors}
        attributes={inputs.nickname.attributes}
        validate={inputs.nickname.validate}
      />

      <button
        type="submit" 
        disabled={!formState.isValid} 
        className={`w-full p-3 rounded-md h-12 mt-5 transition-opacity ${
          formState.isValid ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        회원가입
      </button>
    </form>
  );
}
