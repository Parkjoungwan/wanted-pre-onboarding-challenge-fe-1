import { useEffect, useState } from "react";
import { authApi } from "../lib/authAPI";
import * as HomeStyled from "../styles/HomeStyle";

const validate = (email: string, password: string): number => {
  let result: number = 0;
  const regex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (!regex.test(email)) {
    result = 1;
  }
  if (password.length < 8) {
    if (result === 1) result = 3;
    else result = 2;
  }
  return result;
};

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [val, setVal] = useState<boolean>(true);
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    try {
        const respone = await authApi.postLogin(email, password);
        console.log(respone);
    } catch (e: any) {
        console.log(e);
    }
  }
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
    }
  }, []);
  useEffect(() => {
    if (validate(email, password) === 0) setVal(false);
    else setVal(true);
  }, [email, password]);
  return (
    <HomeStyled.HomeDiv>
      <HomeStyled.LogoDiv>
        <HomeStyled.ImgDiv>Todo List</HomeStyled.ImgDiv>
      </HomeStyled.LogoDiv>
      <HomeStyled.InputDiv>
        <HomeStyled.IdDiv>
          ID:
          <input type="email" value={email} onChange={onChangeEmail} />
        </HomeStyled.IdDiv>
        <HomeStyled.PwDiv>
          PW:
          <input type="password" value={password} onChange={onChangePassword} />
        </HomeStyled.PwDiv>
      </HomeStyled.InputDiv>
      <HomeStyled.ButtonDiv>
        <HomeStyled.ButtonLogin onClick={onClickLogin} disabled={val}>Login</HomeStyled.ButtonLogin>
        <HomeStyled.ButtonJoin>Join</HomeStyled.ButtonJoin>
      </HomeStyled.ButtonDiv>
    </HomeStyled.HomeDiv>
  );
}
