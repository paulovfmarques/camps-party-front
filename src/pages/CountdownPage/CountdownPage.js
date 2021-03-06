import React, { useEffect, useState } from "react";
import axios from "axios";
import planet from "../../assets/mundo.png";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

export default function CountdownPage() {
  //Initializing valid timer
  const event = Date.now() + 5000;
  const [date, setDate] = useState(event);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKURL}/api/users/countdown`)
      .then(({ data }) => setDate(data.event));
  }, []);

  return (
    <Container>
      <Planet src={planet} alt="camps party planet" />
      <div>
        <Logo src={logo} alt="campus party logo" />
        <div>
          <StyledCountdown date={date} daysInHours={true}>
            <div className="link-container">
              <Link to="/pre-registration">
                <GoToPage>
                  <span>
                    A ESPERA ACABOU! <br />{" "}
                  </span>
                  <span>FAÇA JÁ SUA PRÉ INSCRIÇÃO!</span>
                </GoToPage>
              </Link>
              <Link to="/login">
                <GoToPage>
                  <span className="to-login">
                    JÁ FIZ MINHA INSCRIÇÃO! <br />{" "}
                  </span>
                </GoToPage>
              </Link>
            </div>
          </StyledCountdown>
        </div>
      </div>
    </Container>
  );
}

const Planet = styled.img`
  width: 50%;
  @media (max-width: 800px){
    width: 80vw;
    margin: -1rem auto;
  }
`;

const Logo = styled.img`
  width: auto;
  height: 14rem;
  margin-bottom: 2rem;
  @media (max-width: 800px){
    width: 4rem;
    height: 4.5rem;
    margin: -1.5rem 0 1rem 0;
  }
`;

const StyledCountdown = styled(Countdown)`
  font-size: 6.5rem;
  @media (max-width: 800px){
    font-size: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 75%;
      padding: 2rem;
      border-radius: 2rem;
      background-color: rgb(255, 255, 255, 0.24);
    }
    
  }

  .link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    a{
      width: 100%;
    }

    button {
      margin: 1rem;
      width: 90%;
    }
    .to-login {
      font-size: 1rem;
    }
  }

  @media (max-width: 800px){
    flex-wrap: wrap;
    & > div{
      width: 100%;
      > div{
        width: 85vw;
        padding: 1em;
      }
    }

    .link-container{
      .to-login{
        font-size: 0.8rem;
      }

      button{
        margin: 0.5rem 0 0.5rem 0;
        width: 100%;
      }

      a{
        width: 100%;
      }
    }
  }
`;

const GoToPage = styled.button`
  z-index: 9999;
  background-color: rgb(16, 37, 66, 0.14);
  width: 30rem;
  height: 100%;
  border-radius: 2rem;
  padding: 1.5rem;
  outline: none;
  border: none;
  text-align: center;
  color: white;
  transition: 0.1s all ease-in;
  box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.45);

  &:hover {
    background-color: rgb(16, 37, 66, 0.45);
  }

  & > span {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
  }
  @media (max-width: 800px){
    width: 95%;

    & > span{
      font-size: 0.8rem;
      padding: 0;
    }
  }
`;
