import styled from "styled-components";
import {FiSettings} from 'react-icons/fi'

export const BarInfo = styled.div`
width: 100px;
margin-top: 5px;
margin-left: 16px;
display: flex;
align-items: center;
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 9px;
color: #161616;
`

export const GraphBox2 = styled.div`
height: 170px;
margin-left: 17px;
margin-top: 5px;
@media only screen and (max-width: 767px) {
width: 90%;
}


`

export const BarHeader = styled.div`
display: flex;
margin: 10px 10px 0 10px;
justify-content:space-between;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
color: #333333;
`

export const BarGraphContainer = styled.div`
height: 100%;
background: #FFFFFF;
border: 0.5px solid #E4E4E4;
box-sizing: border-box;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
border-radius: 5px;
`

export const VisuDet = styled.div`
margin-left: 8px;
margin-bottom: 2px;

/* width: 135px; */
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
color: #4d4d4d;
    :hover{
    cursor: pointer;
    color: #1a1a1a;
    }
`


export const InfoContainer = styled.div`
display: flex;
justify-content: space-around;
`

export const InfoLeft = styled.div`

display: flex;
flex-wrap: wrap;
margin-top: 5px;
height: 15px;
width: 160px;
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 9px;
color: #161616;
`
export const InfoRight = styled.table`
    th{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 15px;
        color: #B0B0B0;
    }
    td{
        font-family: Poppins;
        font-style: normal;
        font-weight: 300;
        font-size: 9px;
        line-height: 17px;
        color: #161616;
    }
`

export const GreenBubble = styled.div`

width: 8px;
height: 8px;
border: 2.5px solid #7FC008;
border-radius:50%;
margin-right:4px;
.small {
    width: 6px !important;
    height: 6px !important;
}
`
export const GreenBubbleSmall = styled.div`

width: 4px;
height: 4px;
border: 2.5px solid #7FC008;
border-radius:50%;
margin-right:4px;

`
export const OrangeBubble = styled.div`
width: 8px;
height: 8px;
border: 2.5px solid #DB8C28;
border-radius:50%;
margin-right:4px
`
export const OrangeBubbleSmall = styled.div`
width: 4px;
height: 4px;
border: 2.5px solid #DB8C28;
border-radius:50%;
margin-right:4px
`
export const RedBubble = styled.div`
width: 8px;
height: 8px;
border: 2.5px solid #EB5757;
border-radius:50%;
margin-right:4px
`

export const GraphBox = styled.div`
height: 150px;
width: 50%;
transform: translateX(50%);
margin-top: 30px;
margin-bottom: 10px;
`

export const MainContainer1 = styled.div`
height: 100%;

background: #FFFFFF;
border: 0.5px solid #E4E4E4;
box-sizing: border-box;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
border-radius: 5px;
`
export const MainContainer2 = styled.div`
width: 100%;
height: 100%;


background: #FFFFFF;
border: 0.5px solid #E4E4E4;
box-sizing: border-box;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
border-radius: 5px;
`
export const MainContainer3 = styled.div`
background: #FFFFFF;
border: 0.5px solid #E4E4E4;
box-sizing: border-box;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
border-radius: 5px;
`

export const MainHeader = styled.h1`
display: flex;
justify-content: space-between;
margin: 0;
margin-top: 5px;
`
export const Engrenagem = styled(FiSettings)`
height: 24px;
width: 24px;
:hover{cursor: pointer}
margin-right: 14px;
margin-top: 7px;
`
export const Txt1 = styled.div`
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
`
export const Txt2 = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
margin-left: 11px;
border-radius: nullpx;
color: #B0B0B0;
line-height: 7px;
`
