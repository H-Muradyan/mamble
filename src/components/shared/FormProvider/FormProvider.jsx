import React, { useContext, useState } from 'react'
import useFormProvider from './hook'

export const FormContext = React.createContext({})
export const useFormContext = () => useContext(FormContext)

export default function FormProvider({
  component: Component,
  onSubmit,
  data,
  validators,
}) {
  const formData = useFormProvider({ onSubmit, data, validators })
  const { value, onChange, errorMessage } = formData

  return (
    <FormContext.Provider value={{ value, onChange, errorMessage }}>
      <Component handleSubmit={formData.handleSubmit} />
    </FormContext.Provider>
  )
}
