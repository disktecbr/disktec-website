import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LanguageOption } from '../../../components/TopHeader/types.ts'

interface LanguageState {
  selectedLanguage: LanguageOption
  availableLanguages: LanguageOption[]
}

const initialState: LanguageState = {
  selectedLanguage: { value: 'pt', label: 'Português' },
  availableLanguages: [
    { value: 'pt', label: 'Português' },
    { value: 'en', label: 'English' },
    { value: 'ar', label: 'العربيّة' },
    { value: 'de', label: 'Deutsch' },
    { value: 'zh', label: '简体中文' },
  ],
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageOption>) => {
      state.selectedLanguage = action.payload
    },
  },
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
