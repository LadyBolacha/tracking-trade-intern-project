import styled from "styled-components";  
import {FiSettings} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'

export const Engrenagem = styled(FiSettings)`
height: 24px;
width: 24px;
left: 0px;
top: 0px;
border-radius: 0px;
margin-right: 14px;
margin-top: 7px;
:hover{cursor: pointer} 
`
export const ArrowLeft = styled(FiChevronRight)`
height: 20px;
width: 20px;

`


export const ContainerGlobal = styled.div`


height: 100%;


background: #FFFFFF;
border: 0.5px solid #E4E4E4;
box-sizing: border-box;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
border-radius: 5px;
`;

export const Box1 = styled.div`
color: #333333;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
letter-spacing: 0px;
text-align: left;
border-radius: nullpx;
margin-left: 11px;
margin-top: 7px;
`;

export const Box1T2 = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
margin: 0;
border-radius: nullpx;
color: #B0B0B0;
line-height: 7px;
`

export const Header = styled.h1`
display: flex;
justify-content: space-between;
margin: 0;
`
export const Pesquisa1 = styled.input`
width: 90%;
height: 34px;

background: #FAFAFA;
border: 1px solid #EBEBEB;
box-sizing: border-box;
border-radius: 100px;
margin-left: 11px;
margin-right: 24px;
margin-top: 16px;
`
export const Selecao1 = styled.select`
  width: 90%;
  height: 28px;
  border-radius: 100px;
  background: #C4C4C4;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  margin-top:20px;
  font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  option {
    color: #333333;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }
`
export const Box2 = styled.div`
margin-top: 39px;
margin-left: 13px;
margin-right:12px;

`
export const Info1 = styled.div`

height: 15px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 12px;
margin-top: 5px;

color: #333333;
`
export const Info2 = styled.div`
height: 20px;


margin-top: 1px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 10px;

color: #B0B0B0;
`

export const BoxInfo12 = styled.div`
width: fit-content;
height: fit-content;
`


export const BoxInfo34 = styled.div`
display: flex;
margin-top: 5px;
justify-content: center;

  div {
    width: fit-content;
    height: 9px;
    line-height: 10px;
    margin: 2px;
    margin-left: 5px;
    margin-right: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 6px;
    padding: 1px;
    padding-left:6px;
    padding-right: 6px;
    color: #7FC008;
    border:1.3px solid #7FC008;
    border-radius: 100px;
    
  }
  .pendente{
      padding-left:10px;
      padding-right: 10px;
    }

  span{
    width: 140px;
    height: 20px;
   
    top: 557px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    
    text-align: center;

    color: #BDBDBD;
  }

`
export const MainBox = styled.div`
margin-top: 7px;
margin-bottom: 7px;
display: flex;
flex-direction: column;
height: 50px;
flex-wrap: wrap;
justify-content: space-between;
border-bottom:1px solid #EBEBEB ;
`

