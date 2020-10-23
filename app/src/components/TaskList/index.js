import React, { useState } from "react";
import TaskListModal from "../TaskListModal";
import "./styles.css";

export default function TaskList() {
  const [tasks, setTasks ] = useState([
  {
    name: "PA - Autoestudo",
    deadline: {
      day: 6,
      hour: 23,
      minute: 59
    },
    time: {
      hour: 3,
      minute: 30
    }
  },


  {
    name: "FSO - Prova",
    deadline: {
      day: 6,
      hour: 16,
      minute: 0
    },
    time: {
      hour: 2,
      minute: 0
    }
  },
  ]);

  const dayMap = {
    1: 'DOM',
    2: 'SEG',
    3: 'TER',
    4: 'QUAR',
    5: 'QUIN',
    6: 'SEX',
    7: 'SAB'
  };

  const updateTask = (taskIndex, taskInfo) => {
    return;
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
      <div className="tasks">
        <div className="toolbar">
          <TaskListModal addTask={addTask}/>
          <button>Limpar</button>
        </div>


        <div className="table-head">
          <div className="table-cell">TAREFA</div>
          <div className="table-cell">DEADLINE</div>
          <div className="table-cell">TEMPO ESTIMADO DECICADO</div>
        </div>
          
        <div className="table">
          {tasks.map((task) => {
            return (
              <div className="table-row">
                <div className="table-cell">{task.name}</div>
                <div className="table-cell">{dayMap[task.deadline.day]} - {task.deadline.hour}:{task.deadline.minute}</div>
                <div className="table-cell"><span style={{width: (task.time.hour * 60 + task.time.minute) * 100/1440 + "%"}}>{task.time.hour ? task.time.hour + "h" : null}{task.time.minute ? task.time.minute + "min" : null}</span></div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }