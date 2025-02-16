import FormInput from './FormInput';

export default function SignupStepOne({ register, errors, inputs, onNext, formState }) {
  return (
    <form className="flex flex-col">
      <FormInput label={inputs.email.options.label} register={register} name="email" errors={errors} attributes={inputs.email.attributes} validate={inputs.email.validate} />
      <FormInput label={inputs.password.options.label} register={register} name="password" errors={errors} attributes={inputs.password.attributes} validate={inputs.password.validate} />
      <FormInput label={inputs.name.options.label} register={register} name="name" errors={errors} attributes={inputs.name.attributes} validate={inputs.name.validate} />

      <button
        type="button"
        onClick={() => formState.isValid && onNext()}
        disabled={!formState.isValid}
        className={`w-full p-3 rounded-md h-12 mt-5 transition-opacity ${
          formState.isValid ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        다음
      </button>
    </form>
  );
}
