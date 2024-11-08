import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    loginStatus: false,
    affiliate: false,
    light: true,
    userType: 'Guide'
  },
  reducers: {
    setUser(state, action) {
      state.userData = action.payload
      state.loginStatus = true
    },
    logout(state, action) {
      state.userData = {}
      state.loginStatus = false;
    },
    setAffiliate(state, action) {
      state.affiliate = action.payload
    },
    setLightMode(state, action) {
      state.light = action.payload
    },
    setUserType(state, action) {
      state.userType = action.payload
    }
  }
})
export const { setUser, logout, setAffiliate, setLightMode, setUserType } = UserSlice.actions;

export default UserSlice.reducer;