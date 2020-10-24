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
import Cell from "../Cell";

const DAYS_WEEK = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

export default function Schedule({ organizedTasks, SetOrganizedTasks }) {
  const [config, setUserConfig] = useState(null);
  const [tableColumns, setTableColumns] = useState([]);
  const [eraseModalOpen, setEraseModalOpen] = useState(false);
  const [totalTimeMimDay, setTotalTimeMimDay] = useState(0);

  const toggleEraseModal = () => setEraseModalOpen(!eraseModalOpen);

  useEffect(() => {
    if (config) {
      setSchedule();
      setTotalTimeMimDay(config.totalWeekTimeMin / 7);
    }
  }, [config]);
  useEffect(() => {
    loadUserConfig();
  }, []);
  useEffect(() => {
    if (organizedTasks.length) setTasksOnSchedule();
  }, [organizedTasks]);

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
    for (let i = 0; i < tableTImerCounter; i++) {
      timeArray.push(intitalTimeAbsoluteHour + i * stepAbsoluteHour);
    }
    setTableColumns(timeArray);
  };

  const setTasksOnSchedule = () => {
    // organizedTasks.forEach((task) => {
    //   const squareToColor = {
    //     i: Math.floor(task.initTimeMin)/totalTimeMimDay,
    //     j:
    //   }
    //   setTaskSquareArray([...taskSquareArray, squareToColor]);
    // })
  };

  const clearAll = () => {
    SetOrganizedTasks([]);
    toggleEraseModal();
  };

  const formaTime = (time) => {
    const hour = parseInt(time);
    const min = (time - hour) * 60;
    return `${hour}:${min}`;
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
              <th id="column"></th>
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
                <th id="row" scope="row">
                  {day}
                </th>
                {tableColumns.map((time, j) => (
                  <Cell
                    organizedTasks={organizedTasks}
                    config={config}
                    totalTimeMimDay={totalTimeMimDay}
                    i={i}
                    j={j}
                  />
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
