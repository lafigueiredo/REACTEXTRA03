import styled from "styled-components";
import background from "../../assets/background01.gif";

export const HomeBanner = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const HomePerfil = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 50px;
  border-radius: 0px 0px 100px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  font-family: "Press Start 2P", cursive;
`;

export const HomePerfilImg = styled.img`
  max-width: 600px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.4);
`;

export const HomePerfilName = styled.h1`
  font-size: 70px;
`;
export const HomePerfilRole = styled.h2`
  font-size: 40px;
  color: #ff5c81;
`;
