export default class Auth {
  public email: string;
  public password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public validate(): number {
    let result: number = 0;
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regex.test(this.email)) {
      result = 1;
    }
    if (this.password.length < 8) {
      if (result === 1) result = 3;
      else result = 2;
    }
    return result;
  }
}
