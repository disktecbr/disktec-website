// src/components/TopHeader/LanguageSelector.tsx
import React from 'react'
import Select, { StylesConfig, components } from 'react-select'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setLanguage } from '../../redux/features/language/languageSlice'
import { LanguageOption } from './types.ts'

const LanguageSelector: React.FC = () => {
  const dispatch = useAppDispatch()
  const { selectedLanguage, availableLanguages } = useAppSelector(
    (state) => state.language,
  )

  const handleLanguageChange = (option: LanguageOption | null) => {
    if (option) {
      dispatch(setLanguage(option))
    }
  }

  // Componente personalizado para o indicador dropdown
  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <i className="bx bx-chevron-down" aria-hidden="true"></i>
      </components.DropdownIndicator>
    )
  }

  // Estilos personalizados para o React Select
  const selectStyles: StylesConfig<LanguageOption, false> = {
    control: (base) => ({
      ...base,
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      minHeight: 'unset',
      height: '24px',
      cursor: 'pointer',
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0 8px',
    }),
    singleValue: (base) => ({
      ...base,
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: 500,
      margin: 0,
    }),
    option: (base, state) => ({
      ...base,
      transition: '0.6s',
      color: state.isSelected ? '#0460D9' : '#252525',
      backgroundColor: 'transparent',
      padding: '8px 15px',
      borderBottom: '1px solid #e1e1e1',
      ':hover': {
        color: '#0460D9',
        backgroundColor: 'transparent',
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#ffffff',
      boxShadow: '0px 0px 29px 0px rgba(102, 102, 102, 0.1)',
      borderRadius: 0,
      marginTop: '20px',
      width: '180px',
      zIndex: 9999,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      position: 'relative',
      top: '2px',
      right: '5px',
      color: '#ffffff',
      padding: '0 8px 0 0',
      ':hover': {
        color: '#ffc221',
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  }

  return (
    <div className="language-selector">
      <Select
        value={selectedLanguage}
        onChange={(option) => handleLanguageChange(option as LanguageOption)}
        options={availableLanguages}
        styles={selectStyles}
        isSearchable={false}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
        aria-label="Selecionar idioma"
        className="language-select"
        classNamePrefix="language-select"
      />
    </div>
  )
}

export default LanguageSelector
