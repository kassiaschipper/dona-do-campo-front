import styled from "styled-components";
import React from "react";

export default function LogoBox() {
    return (
        <Wrapper>
            <div>
               <h1>Dona do Campo</h1>
               <h2> Local destinado à administração do time</h2>
            </div>            
         </Wrapper>
    )
}

const Wrapper = styled.div`
   width: 62%;
   height: 100vh;
    

      h1 {
        width: 100%;
         color: #FFFFFF;
         font-weight: 300;
         font-size: 5.6rem;
         margin-top: 28vh;
         margin-left: 05vw;
         font-family: 'Amatic', sans-serif;  
      }
      h2 {
         color: #000;
         font-weight: 200;
         font-size: 1.3rem;
         margin-top: 1vh;
         margin-left: 05.5vw;
         font-family: 'Amatic', sans-serif;    
  
      }

      @media (max-width: 650px) {
         width: 100%;
         height: 35vh;
         display: flex;
         justify-content: center;
         align-items: center;

         div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
         }

         h1 {
            margin-top: 0px;
            margin-left: 0px;
            font-size: 4.5rem;
         }
    
  }
   
`;