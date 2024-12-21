// src/redux/languageSlice.ts
// @ts-nocheck
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LanguageState = {
  language: string;
};

const initialState: LanguageState = {
  language: 'English', // Default language
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;