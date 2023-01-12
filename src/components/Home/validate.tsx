
export const authInputValidate = (email: string, password: string): boolean => {
  if (emailValidate(email) && passwordValidate(password)) {
    return true;
  }
  return false;
};

const emailValidate = (email: string): boolean => {
  const emailValidateRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (emailValidateRegex.test(email)) {
    return true;
  }
  return false;
};

const passwordValidate = (password: string): boolean => {
  if (password.length >= 8) {
    return true;
  }
  return false;
};