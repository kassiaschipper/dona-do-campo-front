import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postSignUp } from "../../service/donaDoCampo";
import { AuthBox, Button } from "./SignIn";
import styled from "styled-components";
import React from "react";
import LogoBox from "./LogoBox";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [disabledInput, setDisabledInput] = useState(false);
  const [color, setColor] = useState("");
  
  const navigate = useNavigate();

  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);

    const body = {
      email,
      password,
      confirmPassword,
      name,
      urlImage,
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      alert("Passwords do not match, enter again.");
      setDisabledInput(false);
      return;
    }

    if (password.length < 6) {
      setPassword("");
      setConfirmPassword("");
      alert("Password must be 6 digits or more.");
      setDisabledInput(false);
      return;
    }

    postSignUp(body)
      .then(() => {
        resetForm();
        setDisabledInput(false);
        navigate("/");
      })
      .catch((res) => {
        if (res.message === "Network Error") {
          resetForm();
          alert(
            `Error submitting request, please try again later. (${res.message})`
          );
          setDisabledInput(false);
          return;
        }

        if (res.response.status === 409) {
          setEmail("");
          alert(
            `Email already registered, enter another email. (${res.response.status} - ${res.response.data})`
          );
          setDisabledInput(false);
          return;
        }

        resetForm();
        alert(
          `Something went wrong, try again. (${res.response.status} - ${res.response.data})`
        );
        setDisabledInput(false);
      });
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUrlImage("");
  }

  return (
    <Wrapper>
        <LogoBox />
      <AuthBox>
        <TitleWrapper>Cadastre seu time </TitleWrapper>
        <form onSubmit={sendForm}>
          <FormContent>
            <input
              type="text"
              name="nome"
              placeholder="nome do time"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={disabledInput}
            />
            <input
              type="email"
              name="email"
              placeholder="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={disabledInput}
            />
            
            <input
              title="imagem em boa resolução do escudo do time"
              type="url"
              name="urlImage"
              placeholder="imagem"
              value={urlImage}
              onChange={(e) => setUrlImage(e.target.value)}
              required
              disabled={disabledInput}
            />

            {/* <input
              title="Principais cores do time em Hex Code (#)"
              type="text"
              name="color"
              placeholder="cores do time"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
              disabled={disabledInput}
            /> */}

            <input
              type="password"
              name="senha"
              placeholder="senha"
              min="100000"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={disabledInput}
            />

            <input
              type="password"
              name="confirme-senha"
              placeholder="confirme a senha"
              min="100000"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={disabledInput}
            />

            <Button
              data-back="OK"
              data-front="Cadastre-se"
              disabled={disabledInput}
            ></Button>
            
            <LinksWrapper>
            <Link to="/sign-in">
              <p>Página de Login</p>
            </Link>
            <Link to="/">
              <p>Voltar para Home</p>
            </Link>
            </LinksWrapper>
            
          </FormContent>
        </form>
      </AuthBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const TitleWrapper = styled.div`
margin: 0 auto;
margin-top: 3.5rem;
margin-bottom: 1.5rem;
font-size: 1.5rem;
color: #3a0088;
font-weight: 500;
`;

const FormContent = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   height: 90%;
   
   input {
    width: 25vw;
    height: 8vh;
    margin-bottom: 10px;
    border-radius: 15px;
    border: 1px solid #3a0088;
    font-weight: 500;
    font-family: "Amatic";
    color: #3a0088;
    font-size: 1.3rem;
    padding-left: 1.1rem;
  }

  input:focus {
    outline-color: orange;
  }

  input::placeholder {
    color: lightgray;
    font-weight: 700;
    font-family: "Amatic", sans-serif;
    font-size: 1.2rem;
  }

  @media (max-width: 650px) {
    width: 100%;
    align-items: center;

    input {
      height: 50px;
      width: 70vw;
      font-size: 1.1rem;
    }

    input::placeholder {
      font-size: 1.1rem;
    }
  } 
`;

const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;