import { useState } from "react";
import styled from "styled-components";
//import Sidebar from "./Sidebar";
import Header from "../headerComponents/Header";
import Sidebar from "../sidebarComponents/Sidebar";
import Panel from "./Panel";
import News from "./News"

export default function Home() {
const [imagem, setImagem] = useState("");

    return <Wrapper>
        <Header/>
        <Panel />
        <News />
        </Wrapper>
}

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
//background-color: #14a652;
background-color: blueviolet;
scroll-behavior: smooth;
`;

