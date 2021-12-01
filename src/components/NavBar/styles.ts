import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
height: 100%;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 15px;

@media only screen and (max-width:1040px){
      .navbar{
        width: 100%;
      .menu-burguer {
        background:none;
        color: #FAFAFA;
        margin: 5px 0;
      width: 50px;
         height: 32px;
         right:0;
      }
      }}





  z-index: 2;
  .linkArrowLeft {
    margin-left: 208px;
  }
  .arrowLeft {
    color: #0794b2;
    width: 20px;
    height: 20px;
  }
  .menu-burguer {
    cursor: pointer;
    margin-top: 150px;
    padding: 10px;
    width: 30px;
    height: 30px;
    background: #fafafa;
    border-radius: 100%;
    color: #333333;
  }
  svg {
    transition: 0.5s;
  }
  svg:hover {
    color: #04db45;
  }
  .navbar {
    background: linear-gradient(180deg, #0db2d6 8.12%, #4fda91 71.62%);
    height: 100%;
    width: 50px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    @media only screen and (max-width: 1053px) {
      width: 100%;
    }
    span {
      margin: 0;
    }
  }
  .nav-menu {
    background: #fafafa;
    width: 250px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    border-right: 1px solid #EBEBEB;
  }
  .nav-menu.active {
    left: 0;
    height: 100%;
    z-index: 3;
    transition: 350ms;
  }
  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 6px;
    list-style: none;
    height: 60px;
  }
  .nav-text a {
    text-decoration: none;
    color: #0794b2;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    transition: 0.2s;
    border-radius: 4px;
  }
  .nav-text a:hover {
    color: ${shade(0.3, '#0794B2')};
  }
  .nav-menu-items {
    width: 100%;
  }
   .navbar-toggle {
  background: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
} */
  span {
    margin-left: 16px;
  }
`;