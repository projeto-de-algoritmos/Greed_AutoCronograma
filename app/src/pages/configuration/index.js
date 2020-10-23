/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import configImage from "../../assets/ConfigImage.svg";
import "./styles.css";

function Configuration() {
  const [initialHour, setInitialHour] = useState(0);
  const [initialMinute, setInitialMinute] = useState(0);
  const [finalHour, setFinalHour] = useState(23);
  const [finalMinute, setFinalMinute] = useState(59);
  const [stepHour, setStepHour] = useState(1);
  const [stepMinute, setStepMinute] = useState(0);
  const history = useHistory();

  return (
    <div className="config-div">
      <div className="config-content">
        <h3>Configuração</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            localStorage.setItem(
              "user:config",
              JSON.stringify({
                initialTime: {
                  hour: initialHour ? initialHour : 0,
                  minute: initialMinute ? initialMinute : 0,
                },

                finalTime: {
                  hour: finalHour ? finalHour : 23,
                  minute: finalMinute ? finalMinute : 59,
                },

                step: {
                  hour: stepHour ? stepHour : 1,
                  minute: stepMinute ? stepMinute : 0,
                },
              })
            );

            history.push("/home");
          }}
        >
          <h4>Defina o horário inicial</h4>

          <div className="timeInput">
            <label htmlFor="initial-hours">Horas:</label>
            <input
              type="number"
              id="initial-hours"
              name="initial-hours"
              min="0"
              max="23"
              placeholder="0"
              onChange={(e) => {
                setInitialHour(e.target.value);
              }}
            />
          </div>

          <div className="timeInput">
            <label htmlFor="initial-minutes">Minutos:</label>
            <input
              type="number"
              id="initial-minutes"
              name="initials-minutes"
              min="0"
              max="59"
              placeholder="0"
              onChange={(e) => {
                setInitialMinute(e.target.value);
              }}
            />
          </div>

          <h4>Defina o horário final</h4>

          <div className="timeInput">
            <label htmlFor="final-hours">Horas:</label>
            <input
              type="number"
              id="final-hours"
              name="final-hours"
              min="0"
              max="23"
              placeholder="23"
              onChange={(e) => {
                setFinalHour(e.target.value);
              }}
            />
          </div>

          <div className="timeInput">
            <label htmlFor="final-minutes">Minutos:</label>
            <input
              type="number"
              id="final-minutes"
              name="final-minutes"
              min="0"
              max="59"
              placeholder="59"
              onChange={(e) => {
                setFinalMinute(e.target.value);
              }}
            />
          </div>

          <h4>Defina o acréscimo de tempo entre horários</h4>

          <div className="timeInput">
            <label htmlFor="step-hours">Horas:</label>
            <input
              type="number"
              id="step-hours"
              name="step-hours"
              min="0"
              max="23"
              placeholder="1"
              onChange={(e) => {
                setStepHour(e.target.value);
              }}
            />
          </div>

          <div className="timeInput">
            <label htmlFor="step-minutes">Minutos:</label>
            <input
              type="number"
              id="step-minutes"
              name="step-minutes"
              step="30"
              min="0"
              max="59"
              placeholder="0"
              onChange={(e) => {
                setStepMinute(e.target.value);
              }}
            />
          </div>

          <input type="submit" value="OK" />
        </form>
      </div>
      <img src={configImage} alt="" />
    </div>
  );
}

export default Configuration;
