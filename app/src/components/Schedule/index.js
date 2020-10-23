/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  Table,
  Container,
  ModalBody,
  ModalFooter,
  Modal,
  ModalHeader,
} from "reactstrap";
import "./styles.css";
import { GrClear } from "react-icons/all";

const DAYS_WEEK = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

export default function Schedule() {
  const [config, setUserConfig] = useState(null);
  const [tableColumns, setTableColumns] = useState([]);
  const [timeNotAvailableArray, setTimeNotAvailableArray] = useState([]);
  const [eraseModalOpen, setEraseModalOpen] = useState(false);

  console.log(config);

  const toggleEraseModal = () => setEraseModalOpen(!eraseModalOpen);

  useEffect(() => {
    if (config) setSchedule();
  }, [config]);
  useEffect(() => {
    loadUserConfig();
  }, []);
  const loadUserConfig = () => {
    const configFromStorage = localStorage.getItem("user:config");
    setUserConfig(JSON.parse(configFromStorage));
  };

  const setSchedule = () => {
    const { initialTime, finalTime, step } = config;
    const intitalTimeAbsoluteHour =
      Number(initialTime.hour) + Number(initialTime.minute) / 60;
    const finalTimeAbsoluteHour =
      Number(finalTime.hour) + Number(finalTime.minute) / 60;
    const stepAbsoluteHour = Number(step.hour) + Number(step.minute) / 60;

    const tableTImerCounter =
      (finalTimeAbsoluteHour - intitalTimeAbsoluteHour) / stepAbsoluteHour;

    const timeArray = [];
    for (let i = 0; i <= tableTImerCounter; i++) {
      timeArray.push(intitalTimeAbsoluteHour + i * stepAbsoluteHour);
    }
    setTableColumns(timeArray);
  };

  const clearAll = () => {
    setTimeNotAvailableArray([]);
    toggleEraseModal();
  };

  const formaTime = (time) => {
    const hour = parseInt(time);
    const min = (time - hour) * 60;
    return `${hour}:${min}`;
  };

  const setTimeUnavailable = (i, j) => {
    if (timeNotAvailableArray.some((item) => item.i === i && item.j === j)) {
      const newArray = timeNotAvailableArray.filter(
        (item) => item.i !== i || item.j !== j
      );
      setTimeNotAvailableArray(newArray);
    } else {
      setTimeNotAvailableArray([...timeNotAvailableArray, { i, j }]);
    }
  };

  const clearScheduleModal = () => {
    return (
      <Modal isOpen={eraseModalOpen} toggle={toggleEraseModal}>
        <ModalHeader toggle={toggleEraseModal}>
          <h4>Atenção!</h4>
        </ModalHeader>
        <ModalBody>
          <p>Você tem certeza que deseja apagar tudo?</p>
        </ModalBody>
        <ModalFooter>
          <button onClick={clearAll}>Sim</button>
        </ModalFooter>
      </Modal>
    );
  };
  return (
    <div className="schedule-container">
      <div onClick={toggleEraseModal} className="clear-button">
        <GrClear className="mr-1" />
        <span>Limpar</span>
      </div>
      <div className="schedule-content">
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              {tableColumns.map((time, i) => (
                <th id="column" key={i}>
                  {formaTime(time)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DAYS_WEEK.map((day, i) => (
              <tr key={i}>
                <th scope="row">{day}</th>
                {tableColumns.map((time, j) => (
                  <td
                    key={j}
                    style={{
                      backgroundColor: timeNotAvailableArray.some(
                        (item) => item.i === i && item.j === j
                      )
                        ? "#ee6f57"
                        : null,
                    }}
                    onClick={() => setTimeUnavailable(i, j)}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {clearScheduleModal()}
    </div>
  );
}
