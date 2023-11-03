import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  font-family: "Press Start 2P", cursive;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const MenuListItem = styled(Link)`
  color: #ff5c81;
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;

  &:hover {
    color: #c1002c;
  }
`;

export const MenuLogo = styled.img`
  max-width: 80px;
  position: absolute;
  top: 35px;
  left: 50px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
export const MenuCurriculo = styled(Link)`
  background-color: #ff5c81;
  padding: 20px 30px;
  font-size: 24px;
  font-family: "Press Start 2P", cursive;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  position: absolute;
  top: 40px;
  right: 50px;

  &:hover {
    background-color: #c1002c;
  }
`;
