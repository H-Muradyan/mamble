import React from 'react'
import { useFormContext } from '../FormProvider/FormProvider'

export default function InputText({ label, type, placeholder, name }) {
  const { value, onChange, errorMessage } = useFormContext()

  return (
    <div className="flex flex-col col-span-4 md:col-span-8 lg:col-start-4 lg:col-span-6 mb-12">
      <label className="ml-2 font-medium mb-1">{label}</label>
      <input
        value={value[name] || ''}
        onChange={onChange}
        className={`border border-solid border-grey rounded-lg px-4 py-3 outline-none hover:border-darkBlue hover:shadow-borderShadow focus:shadow-borderShadow focus:border-blue`}
        type={type}
        placeholder={placeholder}
        name={name}
      />
      <span className={`ml-2 text-errorColor`}>{errorMessage[name]}</span>
    </div>
  )
}
