export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const required = value => (value ? undefined : 'Required');
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength8 = minLength(8);
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

const comparePasswordsFunc = fieldName => (value, fields) => {
  return value === fields[fieldName] ? undefined : 'Password and confirm password do not match.';
};
export const comparePasswords = comparePasswordsFunc('password');