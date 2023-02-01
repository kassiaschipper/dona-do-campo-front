import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Sidebar from "../sidebarComponents/Sidebar";

export default function Header() {
  const [sidebar, setSidebar] = useState(false)

  function showSiderbar () {
    setSidebar(!sidebar)
  }

  return (
    <Wrapper> 
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
height: 100px;
display: flex;
color: white;
//background-color: #1A202C;
background-color: #000;
box-shadow: 0 0 20px 3px;

> svg {
    position: fixed;
    top:32px;
    right: 32px;
    color: #14a652;
    //color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
`;