import React, { useState } from 'react'
import DropDownList from './DropDownList'
import { useFormContext } from '../../FormProvider/FormProvider'
import CurrentFlag from './CurrentFlag'
import { formData } from '../../../ContactUs/formSection/const'

export default function InputTel({ label, type, name }) {
  const { value, onChange, errorMessage } = useFormContext()
  const [telCountries, setTelCountries] = useState(formData.telCountries)

  let [showCountries, setVisible] = useState(false)

  let [currentPlaceholder, setCurrentPlaceholder] = useState('XX-XX-XX-XX')

  const chooseCountry = (newData) => {
    newData.isVisible &&
      setTelCountries(
        telCountries.map((elem) => {
          if (elem.id === newData.id) {
            setCurrentPlaceholder(elem.placeholder)
            return newData
          }
          return { ...elem, isVisible: false }
        })
      )
    setVisible(!showCountries)
  }

  const showDropDown = () => {
    setVisible(!showCountries)
  }

  return (
    <div className="flex flex-col col-span-4 md:col-span-8 lg:col-start-4 lg:col-span-6 mb-12">
      <label className="ml-2 font-medium mb-1">{label}</label>
      <div className="flex border border-solid border-grey rounded-lg px-4 py-3 outline-none hover:border-darkBlue hover:shadow-borderShadow focus:shadow-borderShadow focus:border-blue">
        <CurrentFlag
          telCountries={telCountries}
          showDropDown={showDropDown}
          showCountries={showCountries}
        />
        <input
          className={`outline-none`}
          value={value[name][name] || ''}
          onChange={onChange}
          type={type}
          placeholder={currentPlaceholder}
          name={name}
        />
      </div>
      {showCountries && (
        <DropDownList
          chooseCountry={chooseCountry}
          telCountries={telCountries}
        />
      )}
      <span className={`ml-2 text-errorColor`}>{errorMessage[name]}</span>
    </div>
  )
}
