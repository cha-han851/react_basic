import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: '',
  token: '',
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUid: (state, action) => {
      state.uid = action.payload;
    },
    clearUid: (state) => {
      state.uid = '';
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = '';
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    clearId: (state) => {
      state.id = '';
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    clearFirstName: (state) => {
      state.firstName = '';
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    clearLastName: (state) => {
      state.lastName = '';
    },
    setEmailAddress: (state, action) => {
      state.email = action.payload;
    },
    clearEmailAddress: (state) => {
      state.email = '';
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    clearPhone: (state) => {
      state.phone = '';
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setUid,
  setToken,
  clearToken,
  clearUid,
  setId,
  clearId,
  setFirstName,
  clearFirstName,
  setLastName,
  clearLastName,
  setEmailAddress,
  clearEmailAddress,
  setPhone,
  clearPhone
} = accountSlice.actions;

export default accountSlice.reducer;
