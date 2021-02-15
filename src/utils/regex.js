/* eslint-disable no-useless-escape */
export default {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^(\d|\+|\(\d{2,5}\))(( |-)?\d+){1,6}$/,
  url: /^((https?):\/\/)?(www.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
  strongPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
};
