const SignupInputs = () => {
  return {
    email: {
      attributes: {
        placeholder: '이메일을 입력해주세요.',
        type: 'email',
      },
      validate: {
        required: '이메일은 필수 입력입니다.',
        pattern: {
          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message: '올바른 이메일 형식이 아닙니다.',
        },
      },
      options: {
        label: '아이디',
      },
    },
    password: {
      attributes: {
        placeholder: '비밀번호를 입력해주세요.',
        type: 'password',
      },
      validate: {
        required: '비밀번호는 필수 입력입니다.',
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d|.*[!@#$%^&*]).{8,16}$/,
          message: '영문 대·소문자, 숫자/특수문자 포함 8~16자로 입력해주세요.',
        },
      },
      options: {
        label: '비밀번호',
      },
    },
    name: {
      attributes: {
        placeholder: '이름을 입력해주세요. (한글 2~6자)',
        type: 'text',
      },
      validate: {
        required: '이름은 필수 입력입니다.',
        pattern: {
          value: /^[가-힣]{2,6}$/,
          message: '잘못된 입력입니다. 다시 입력해주세요.',
        },
      },
      options: {
        label: '이름',
      },
    },
    phone: {
      attributes: {
        placeholder: '010-1234-5678 형식으로 입력해주세요.',
        type: 'text',
      },
      validate: {
        required: '전화번호는 필수 입력입니다.',
        pattern: {
          value: /^010-\d{4}-\d{4}$/,
          message: '010-1234-5678 형식으로 입력해주세요.',
        },
      },
      options: {
        label: '전화번호',
      },
    },
    nickname: {
      attributes: {
        placeholder: '닉네임을 입력해주세요. (한글 2글자 이상, 영어 3글자 이상, 특수문자 가능)',
        type: 'text',
      },
      validate: {
        required: '닉네임은 필수 입력입니다.',
        pattern: {
          value: /^(?!\s)(?!.*[\u1100-\u11FF\u3130-\u318F])([가-힣]{2,}|[a-zA-Z]{3,})[\w!@#$%^&*()_+={}|[\]\\:";'<>?,./\s]*$/,
          message: '닉네임은 한글 2글자 이상 또는 영어 3글자 이상이어야 하며, 초성(ㄱㄴㄷ)은 허용되지 않습니다.',
        },
      },
      options: {
        label: '닉네임',
      },
    },
  };
};

export default SignupInputs;
