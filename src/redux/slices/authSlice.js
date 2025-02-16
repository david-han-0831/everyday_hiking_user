import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,  // 로그인 여부
  nickname: null,  // 닉네임
  email: null, // email
  name: null, // 사용자 이름
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.nickname = null;
      state.email = null;
      state.name = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
