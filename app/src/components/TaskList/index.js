import React, { useState } from "react";
import { Button } from "reactstrap";
import TaskListModal from "../TaskListModal";
import "./styles.css";

export default function TaskList({ calculateMinLateness }) {
  const [tasks, setTasks] = useState([]);
  const [modalTask, setModalTask] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [targetTask, setTargetTask] = useState();
  const dayMap = {
    1: "DOM",
    2: "SEG",
    3: "TER",
    4: "QUAR",
    5: "QUIN",
    6: "SEX",
    7: "SAB",
  };

  const updateTask = (taskIndex, taskInfo) => {
    tasks[taskIndex] = taskInfo;
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="tasks">
      <div className="toolbar">
        <Button
          onClick={() => {
            setModalTask(1);
            setModalShow(true);
          }}
        >
          Adicionar tarefa
        </Button>
        <Button
          onClick={() => {
            setTasks([]);
          }}
        >
          Limpar
        </Button>
      </div>

      <div className="table-head">
        <div className="table-cell">TAREFA</div>
        <div className="table-cell">DEADLINE</div>
        <div className="table-cell">TEMPO ESTIMADO DECICADO</div>
      </div>

      <div className="table">
        {tasks.map((task, index) => {
          return (
            <div className="table-row">
              <div className="table-cell">{task.name}</div>
              <div className="table-cell">
                {dayMap[parseInt(task.deadline.day)]} - {task.deadline.hour}:
                {task.deadline.minute}
              </div>
              <div className="table-cell">
                <span
                  onClick={() => {
                    setModalTask(0);
                    setTargetTask(index);
                    setModalShow(true);
                  }}
                  style={{
                    width:
                      ((parseInt(task.time.hour) * 60 +
                        parseInt(task.time.minute)) *
                        100) /
                        1440 +
                      "%",
                  }}
                >
                  {parseInt(task.time.hour)
                    ? parseInt(task.time.hour) + "h"
                    : null}
                  {parseInt(task.time.minute) ? task.time.minute + "min" : null}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => calculateMinLateness(tasks)}>Calcular</button>
      <TaskListModal
        addTask={addTask}
        isVisible={modalShow}
        setVisible={setModalShow}
        modalTask={modalTask}
        targetTask={targetTask}
        taskList={tasks}
        updateTask={updateTask}
      />
    </div>
  );
}
