const SigninInputs = () => {
  return {
    email: {
      attributes: {
        placeholder: '이메일을 입력해주세요',
        type: 'email',
      },
      validate: {
        required: '이메일은 필수 입력항목입니다.',
        pattern: {
          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message: '올바른 이메일 형식이 아닙니다.',
        },
      },
      options: {
        inputGuide: '@를 포함한 이메일 주소를 입력해주세요.',
        label: '이메일',
      },
    },
    password: {
      attributes: {
        placeholder: '비밀번호를 입력해주세요.',
        type: 'password',
      },
      validate: {
        required: '비밀번호는 필수 입력항목입니다.',
        pattern: {
          value:
            /^(?=.*[a-zA-Z])(?=.*\d|.*[!@#$%^&*()_+={}|[\]\\:";'<>?,./])(?=.{8,16}$).*$/,
          message: '영문 대·소문자, 숫자/특수문자 포함 8~16자를 입력해주세요.',
        },
      },
      options: {
        inputGuide: '영문 대·소문자, 숫자/특수문자 포함 8~16자',
        label: '비밀번호',
      },
    },
  };
};

export default SigninInputs;
