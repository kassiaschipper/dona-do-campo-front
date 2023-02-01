import styled from "styled-components"
import NewsCards from "./NewsCards";

export default function News(){

    return <Wrapper><NewsCards /></Wrapper>
}

const Wrapper = styled.div`
    width: 75vw;
    height: 30vh;
    margin-left: 2.5vw;
    margin-top: 5vh;
    background-color: orange;
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;

`;