import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../lib/authAPI";
import * as HomeStyled from "../styles/HomeStyle";
import StateModal from "../components/modals/StateModal";

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

interface stateType {
  stateImg: string;
  msg: string;
}

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [val, setVal] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [stateData, setStateData] = useState<stateType>({
    stateImg: "",
    msg: "",
  });

  const navi = useNavigate();
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    try {
      const respone = await authApi.postLogin(email, password);
      window.localStorage.setItem("token", respone.data.token);
      navi("/Todo");
    } catch (e: any) {
      setModalOpen(true);
      setStateData({ stateImg: "Error", msg: e.response.data.message });
    }
  };
  const onClickJoin = async () => {
    try {
      const respone = await authApi.postJoin(email, password);
      setModalOpen(true);
      setStateData({ stateImg: "Success", msg: respone.data.message });
    } catch (e: any) {
      setModalOpen(true);
      setStateData({ stateImg: "Error", msg: e.response.data.message });
    }
  };
  const tokenCheck = useCallback(() => {
    const token = window.localStorage.getItem("token");
    if (token) navi("/Todo");
  }, [navi]);

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);
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
        <HomeStyled.ButtonLogin onClick={onClickLogin} disabled={val}>
          Login
        </HomeStyled.ButtonLogin>
        <HomeStyled.ButtonJoin onClick={onClickJoin} disabled={val}>
          Join
        </HomeStyled.ButtonJoin>
      </HomeStyled.ButtonDiv>
      {modalOpen ? (
        <StateModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          stateImg={stateData.stateImg}
          msg={stateData.msg}
        />
      ) : null}
    </HomeStyled.HomeDiv>
  );
}
