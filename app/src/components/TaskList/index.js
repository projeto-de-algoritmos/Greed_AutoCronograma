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
      hour: 2,
      minute: 0
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

  return (
      <div className="tasks">
        <div className="toolbar">
          <button>Adicionar tarefa</button>
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

          <div className="table-row">
            <div className="table-cell">PA - Autoestudo</div>
            <div className="table-cell">SEG - 23:59</div>
            <div className="table-cell"><span style={{width: "8%"}}>2h</span></div>
          </div>
        </div>

        <TaskListModal />

      </div>
    );
  }