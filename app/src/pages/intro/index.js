/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import introImg from "../../assets/IntroImage.svg";
import { useHistory } from "react-router-dom";
import "./styles.css";
function Intro() {
  const history = useHistory();

  useEffect(() => {
    checkUserAccess();
  }, []);

  const checkUserAccess = () => {
    const userAccessBefore = localStorage.getItem("user:access");
    if (userAccessBefore) {
      history.push("/home");
    } else {
      setUserAccess();
    }
  };
  const setUserAccess = () => {
    localStorage.setItem("user:access", "true");
  };
  return (
    <div className="intro-container">
      <img src={introImg} alt="intro" className="into-img" />
      <div className="intro-content">
        <h3 className="intro-title">Auto cronograma App</h3>
        <p>
          Uma aplicação simples para organização de sua tarefas. Você só precisa
          informar sua rotina, suas tarefas e pronto, montamos seu cronograma!
        </p>

        <button onClick={() => history.push("/configuration")}>Começar</button>
      </div>
    </div>
  );
}

export default Intro;
