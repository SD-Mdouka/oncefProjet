import styled from "styled-components";

export const Tab = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 22px;
  color: #fff;
  border-radius: 12px 12px 0px 0px;
  margin-right: 15px;
  cursor: pointer;
  background-color: #37065a;
  position: relative;
  ${({ active }) =>
    active &&
    `
    {
    color: #060674;
    
    background-color: rgb(255, 255, 255);
    height: 58px;
    }
    &::before{
content: "";
    display: block;
    width: 18px;
    height: 14px;
    left: -10px;
    bottom: -7px;
    background: #fff;
    border-radius: 0 0% 100% 0;
    position: absolute;
}
     }
     &::after{
          content: "";
    display: block;
    width: 12px;
    height: 12px;
    bottom: -7px;
    position: absolute;
    right: -10px;
    background:#fff;
     border-radius:100% 0 100%;
     }
     
    `}
  ${({ active }) =>
    active &&
    `
    svg g {
    fill: #2f0583;
   
    }
    `}
`;
export const ButtonGroup = styled.div`
  display: flex;
  background-color: transparent;
`;
