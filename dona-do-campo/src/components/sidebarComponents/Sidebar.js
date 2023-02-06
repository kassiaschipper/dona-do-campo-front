import styled from "styled-components";
import {
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from "react-icons/fa";

import SidebarItem from "./SidebarItem";

export default function Sidebar({ active }) {
  
 function closeSidebar() {
    active(false);
  };
  
  return (
    <Wrapper sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaChartBar} Text="Etatisticas" />
        <SidebarItem Icon={FaEnvelope} Text="Contato" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendário" />
        <SidebarItem Icon={FaIdCardAlt} Text="Equipe" />
        <SidebarItem Icon={FaRegFileAlt} Text="Notícias" />
        <SidebarItem Icon={FaUserAlt} Text="Login" />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  //background-color: #171923;
  background-color: #000;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: openSidebar 0.4s;

  > svg {
    position: fixed;
    //color: white;
    color: #14a652;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes openSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

const Content = styled.div`
  margin-top: 25vh;
`;
