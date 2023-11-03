import styled from "styled-components";

export const ProjetosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  max-width: 70vw;
  margin: 100px auto;
`;

export const ProjetosInfos = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 30px;
  padding: 40px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  height: 100%;
`;

export const ProjetosInfosTitle = styled.h2`
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

export const ProjetosImg = styled.img`
  width: 100%;
`;

export const ProjetosVer = styled.a`
  background-color: #ff5c81;
  padding: 20px 30px;
  font-size: 24px;
  font-family: "Press Start 2P", cursive;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  margin: 0 auto;

  &:hover {
    background-color: #c1002c;
  }
`;
