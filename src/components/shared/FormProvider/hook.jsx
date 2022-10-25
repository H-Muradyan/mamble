import React, { useState } from 'react'

export default function useFormProvider({ validators, onSubmit, data }) {
  const [value, setValue] = useState(data)
  const [errorMessage, setErrorMessage] = useState({})

  const onChange = (e) => {
    e.target.name === 'phone'
      ? setValue((prevState) => ({
          ...prevState,
          [e.target.name]: {
            [e.target.name]: e.target.value,
            phoneCode: e.target.parentElement.innerText,
            placeholder: e.target.placeholder,
          },
        }))
      : setValue((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage(validators(value))
    if (Object.values(validators(value)).length === 0) {
      onSubmit()
      setValue(data)
    } 
  }

  return {
    value,
    errorMessage,
    onChange,
    handleSubmit,
  }
}
