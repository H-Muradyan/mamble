import { regs } from '../ContactUs/formSection/regConst'

export const validators = (value) => {
  const { regName, regEmail, regPhone } = regs
  const error = {}
  for (let key in value) {
    if (!(key === 'phone' ? value[key][key] : value[key])) {
      error[key] = 'This field is required.'
    } else if (!regEmail.test(value[key]) && key === 'email') {
      error[key] = 'Please enter a valid email address.'
    } else if (key === 'phone') {
      let placeholderLength = value[key].placeholder.replaceAll('-', '').length
      let length = value[key][key].length
      if (!(value[key][key].match(regPhone) && length === placeholderLength)) {
        error[key] = 'Please enter a valid phone number.'
      }
    } else if (!value[key].match(regName) && key === 'name') {
      error[key] = 'Name can not contain symbols and units.'
    } else if (value[key].length < 2 && key === 'name') {
      error[key] = 'The name should contain at least 2 characters.'
    } else if (value[key].length > 70 && key === 'name') {
      error[key] = ' The name should contain a max of 70 characters.'
    } else if (value[key].length < 15 && key === 'message') {
      error[key] = 'The message should contain at least 15 characters.'
    } else if (value[key].length > 500 && key === 'message') {
      error[key] = ' The message should contain a max of 500 characters.'
    }
  }

  return error
}
