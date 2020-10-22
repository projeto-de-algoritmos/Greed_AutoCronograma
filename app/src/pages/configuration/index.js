/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import configImage from "../../assets/ConfigImage.svg";

function Configuration() {
  return (
    <div className="config-div">
      <div className="config-content">
        <h3>Configuração</h3>
        <form>
          <h4>Defina o horário inicial</h4>

          <div className="timeInput">
            <label for="initial-hours">Horas:</label>
            <input type="number" id="hours" min="0" max="23" placeholder="0"/>
          </div>

          <div className="timeInput">
            <label for="initial-minutes">Minutos:</label>
            <input type="number" id="initial-minutes" min="0" max="59" placeholder="0"/>
          </div>

          <h4>Defina o horário final</h4>

          <div className="timeInput">        
            <label for="final-hours">Horas:</label>
            <input type="number" id="final-hours" min="0" max="23" placeholder="23"/>
          </div>

          <div className="timeInput">   
            <label for="final-minutes">Minutos:</label>
            <input type="number" id="final-minutes" min="0" max="59" placeholder="59"/>
          </div>

          <h4>Defina o acréscimo de tempo entre horários</h4>

          <div className="timeInput">   
            <label for="step-hours">Horas:</label>
            <input type="number" id="step-hours" min="0" max="23" placeholder="1" />
          </div>

          <div className="timeInput">   
            <label for="step-minutes">Minutos:</label>
            <input type="number" id="step-minutes" step="30" min= "0" max="59" placeholder="0" />
          </div>

          <input type="submit" value="OK" />

        </form>
      </div>
      <img src={configImage} alt="" />
    </div>
  );
}

export default Configuration;
