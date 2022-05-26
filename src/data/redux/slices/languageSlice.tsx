import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { renderTree } from '../../../index'
export const setLocalStorLang = (language: string) => {
  localStorage.setItem("language", language);
  return {
    type: "language",
    payload: language
  }
}

const getLocalStorLang = localStorage.getItem('language');


export interface languagesArr {
  language: string
}

const initialState: languagesArr = {
  language: getLocalStorLang ? getLocalStorLang : 'ua'
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      setLocalStorLang(action.payload);
    },

  },
})


// Action creators are generated for each case reducer function
export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer
