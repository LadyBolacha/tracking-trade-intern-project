import styled from "styled-components";

export const MainContainer = styled.div`
@media only screen and (max-width: 1053px) {
    height: 100%;
}


    background: #FFFFFF;
    border: 0.5px solid #E4E4E4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    `

export const Head = styled.div`

    height: 21px;
    margin-top: 4px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #333333;
    `
export const Seletor = styled.select`
    width: 308px;
    height: 28px;
    border-radius: 100px;
    background: #C4C4C4;
    padding-left: 5px;
    font-size: 14px;
    border: none;
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
export const MainHeader=styled.div`

    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-left: 32px;
    margin-right: 19px;
    margin-bottom: 7px;
`

export const NavBar = styled.input`

width: 95%;
height: 34px;

background: #FAFAFA;
border: 1px solid #EBEBEB;
box-sizing: border-box;
border-radius: 100px;   



margin: 1rem 0;
margin-left: 1.5rem;
    ::placeholder{
    
        height: 25px;
        padding-left: 13px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 25px;
        color: #999999};
`
export const MainTable=styled.table`
   
    width:90%;
    margin-top: 8px;
    margin-left:35px ;
    th{
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 6px;
        text-align: center;
    }
    td{
        border-bottom: 0.5px solid #EBEBEB;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        height: 21px;
        text-align: center;
    }
    .lefted{
        text-align: left;
    }
`