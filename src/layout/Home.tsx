import * as HomeStyled from "../styles/layoutStyles/HomeStyle";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../lib/APIs/authAPI";
import {
  TokenContext,
  StateModalControllerContext,
} from "../lib/context/context";
import StateModal from "../components/modals/StateModal";
import { stateHandle, tokenCheck } from "../components/other/utils";
import { authInputValidate } from "../components/Home/validate";

export default function Home() {
  const tokenContext = useContext(TokenContext);
  const stateContext = useContext(StateModalControllerContext);
  const navi = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);
  //validate
  useEffect(() => {
    if (authInputValidate(email, password)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  //Action
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    try {
      const respone = await authApi.postLogin(email, password);
      tokenContext?.setToken(respone.data.token);
      window.localStorage.setItem("token", respone.data.token);
      navi("/");
    } catch (e: any) {
      stateHandle(stateContext, "Error", e.response.data.message);
    }
  };
  const onClickJoin = async () => {
    try {
      const respone = await authApi.postJoin(email, password);
      stateHandle(stateContext, "Success", respone.data.message);
    } catch (e: any) {
      stateHandle(stateContext, "Error", e.response.data.message);
    }
  };
  const preventSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  } 

  //tokenCheck
  useEffect(() => {
    if (!tokenCheck(tokenContext, stateContext)) {
      navi("/");
    }
  }, [navi, tokenContext, stateContext]);

  return (
    <HomeStyled.HomeDiv>
      <HomeStyled.LogoDiv>
        <HomeStyled.ImgDiv>Todo List</HomeStyled.ImgDiv>
      </HomeStyled.LogoDiv>
      <HomeStyled.InputForm onSubmit={preventSubmit}>
        <HomeStyled.IdDiv>
          <HomeStyled.Label htmlFor="ID">ID:</HomeStyled.Label>
          <input id="ID" type="email" value={email} onChange={onChangeEmail} />
        </HomeStyled.IdDiv>
        <HomeStyled.PwDiv>
          <HomeStyled.Label htmlFor="PW">PW:</HomeStyled.Label>
          <input id="PW" type="password" value={password} onChange={onChangePassword} />
        </HomeStyled.PwDiv>
      </HomeStyled.InputForm>
      <HomeStyled.ButtonDiv>
        <HomeStyled.ButtonLogin onClick={onClickLogin} disabled={disable}>
          Login
        </HomeStyled.ButtonLogin>
        <HomeStyled.ButtonJoin onClick={onClickJoin} disabled={disable}>
          Join
        </HomeStyled.ButtonJoin>
      </HomeStyled.ButtonDiv>
      {stateContext?.isOpen ? (
        <StateModal
          modalOpen={stateContext?.isOpen}
          setModalOpen={stateContext?.setOpen}
          stateImg={stateContext?.stateType.stateImg}
          msg={stateContext?.stateType.msg}
        />
      ) : null}
    </HomeStyled.HomeDiv>
  );
}
