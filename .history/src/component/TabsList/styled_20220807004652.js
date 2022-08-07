import styled from "styled-components";

export const Tab = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 22px;
  border-radius: 12px 12px 0px 0px;
  width: 185px;
  height: 50px;
  margin-right: 15px;
  cursor: pointer;
  background-color: rgb(225, 32, 53);
  position: relative;
  ${({ active }) =>
    active &&
    `
    background-color: rgb(255, 255, 255);
    height: 58px;
    z-index: 2;
  `}
`;
export const ButtonGroup = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  width: 100%;
  z-index: 3;
  padding: 20px 35px;
`;
