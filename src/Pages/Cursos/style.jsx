import styled from "styled-components";

export const CursosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  max-width: 70vw;
  margin: 100px auto;
`;

export const CursosInfos = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 30px;
  padding: 40px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

export const CursosInfosTitle = styled.h2`
  font-size: 48px;
  color: #c1002c;
  position: relative;

  &::before {
    content: "";
    height: 30px;
    width: 15px;
    border-radius: 5px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(193, 0, 44, 1) 35%,
      rgba(255, 92, 129, 1) 100%
    );
    position: absolute;
    left: -40px;
    top: 10px;
  }
`;

export const CursosInfosNome = styled.p`
  font-size: 30px;
  color: #ff5c81;
`;

export const CursosInfosText = styled.p`
  line-height: 1.3;
  font-size: 24px;
`;

export const CursosInfosDetail = styled.p`
  color: #7c93f6;
  font-size: 24px;
`;
