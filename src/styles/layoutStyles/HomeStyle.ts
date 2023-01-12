import styled from 'styled-components';

export const HomeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 2fr 6fr 1fr 2fr 2fr 1fr;
`;

export const LogoDiv = styled.div`
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 6fr 14fr;
  font-family: NanumMyeongjo;
  font-size: 60px;
  font-weight: bold;
`;

export const ImgDiv = styled.div`
  grid-column: 2;
`;

export const InputDiv = styled.div`
  grid-row: 4;
  display: grid;
  grid-template-columns: 2.5fr 6.5fr 2fr 7fr 2fr;
  font-family: NanumMyeongjo;
  font-size: 20px;
  font-weight: bold;
`;

export const IdDiv = styled.div`
  grid-column: 2;
`;
export const PwDiv = styled.div`
  grid-column: 4;
`;

export const ButtonDiv = styled.div`
  grid-row: 5;
  display: grid;
  grid-template-columns: 2.5fr 6.5fr 2fr 7fr 2fr;
`;

export const ButtonLogin = styled.button`
  grid-column: 2;
  font-family: NanumMyeongjo;
  font-size: 20px;
  font-weight: bold;
`;

export const ButtonJoin = styled.button`
  grid-column: 4;
  font-family: NanumMyeongjo;
  font-size: 20px;
  font-weight: bold;
`;