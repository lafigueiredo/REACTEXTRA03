import styled from "styled-components";

export const ContatoContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
`;
export const ContatoInput = styled.input`
  padding: 10px;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 24px;
  background-color: transparent;
  color: white;
`;
export const ContatoLabel = styled.label`
  font-size: 30px;
`;

export const ContatoField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;

export const ContatoTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 24px;
  background-color: transparent;
  color: white;
`;

export const ContatoBotao = styled.button`
  background-color: #ff5c81;
  padding: 20px 30px;
  font-size: 24px;
  font-family: "Press Start 2P", cursive;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #c1002c;
  }
`;
