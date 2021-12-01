import React, { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import { Container } from "./styles";
import { Sidebardata } from "./sidebarData";

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = (): void => setSidebar(!sidebar);
  return (
    <Container>
      <div className="navbar">
        <HiOutlineMenu onClick={showSideBar} className="menu-burguer" />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <a href='#' className="linkArrowLeft">
            <IoIosArrowDropleftCircle className="arrowLeft" />
          </a>
          {Sidebardata.map((item) => {
            return (
              <li key={item.title} className={item.cName}>
                <a href={item.path}>
                  {item.icon}
                  <span style={{marginLeft:'15px'}}>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
