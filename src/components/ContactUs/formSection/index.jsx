import React from 'react'
import InputText from '../../shared/inputs/InputText'
import InputTel from '../../shared/inputs/InputTel/InputTel'
import InputTextArea from '../../shared/inputs/InputTextArea'
import Button from '../../shared/inputs/Button'

export default function FormSection({ handleSubmit }) {
  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="max-w-screen-2xl grid grid-cols-4 gap-x-4 mb-40 m-auto px-8 md:grid-cols-8 xl:gap-x-6 lg:grid-cols-12 xl:px-40 2xl:px-56"
      >
        <InputText
          label="Name"
          type="text"
          placeholder="Your name"
          name="name"
        />
        <InputText
          label="Email"
          type="email"
          placeholder="Your email"
          name="email"
        />
        <InputTel label="Phone"   type="tel" name="phone" />
        <InputTextArea
          label="Message"
          type="textarea"
          placeholder="Message"
          name="message"
        />
        <Button type="button" value="Submit" />
      </form>
    </div>
  )
}
