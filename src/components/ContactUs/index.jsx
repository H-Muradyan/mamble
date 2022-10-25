import React from 'react'
import MapSection from './mapSection'
import FormSection from './formSection'
import FormProvider from '../shared/FormProvider/FormProvider'
import { data } from './formSection/const'
import { validators } from '../shared/validators'


export default function ContactUsPage() {
  const onSubmit = () => {
    alert("Hi")
  }
  return (
    <>
      <div className="bg-blue">
        <MapSection />
      </div>
      <FormProvider
        component={FormSection}
        onSubmit={onSubmit}
        data={data}
        validators={validators}
      />
    </>
  )
}
