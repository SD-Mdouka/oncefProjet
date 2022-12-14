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
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    left: -11px;
    bottom: -5px;
    background: #fff;
    border-radius: 0 48% 48% 0;
    /* background: url(https://www.oncf-voyages.ma/static/media/coin.95d64182.svg) no-repeat; */
    position: absolute;
   
     }
     &::after{
          content: "";
    display: block;
    width: 12px;
    height: 12px;
    transform: rotate(180deg);
    bottom: -2px;
    position: absolute;
    transform: rotate(-90deg);
    right: -10px;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    background:#fff;
     border-radius:50% 25%;
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
