import styled from "styled-components";

export default function NewsCards() {
  return (
    <>
      <CardWrapper>Card</CardWrapper>
      <CardWrapper>Card</CardWrapper>
      <CardWrapper>Card</CardWrapper>
      <CardWrapper>Card</CardWrapper>
      <CardWrapper>Card</CardWrapper>
      <CardWrapper>Card</CardWrapper>
      <CardWrapper>Card</CardWrapper>
      <CardWrapper>Card</CardWrapper>
      <CardWrapper>Card</CardWrapper>
      <CardWrapper>Card</CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 10px;
  background-color: green;
`;
