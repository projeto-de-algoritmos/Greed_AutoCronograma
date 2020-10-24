import React, { useState } from "react";
import TaskList from "../../components/TaskList";
import Schedule from "../../components/Schedule";
import generateRandomColor from "../../utils/generateRandomColor";
import "./styles.css";

function Home() {
  const [organizedTasks, SetOrganizedTasks] = useState([]);

  function calculateMinLateness(taskList) {
    const config = JSON.parse(localStorage.getItem("user:config"));

    const weekTotalMin = Number(config.totalWeekTimeMin);

    const dayTotalMin = weekTotalMin / 7;

    const taskListMin = taskList.map((task) => ({
      ...task,
      deadlineMin:
        task.deadline.hour * 60 +
        task.deadline.minute +
        (task.deadline.day - 1) * dayTotalMin,
      timeMin: Number(task.time.hour) * 60 + Number(task.time.minute),
    }));

    // Organizando as tarefas por ordem de deadline
    const taskListSorted = taskListMin.sort((task1, task2) => {
      if (task1.deadlineMin > task2.deadlineMin) return 1;
      if (task1.deadlineMin === task2.deadlineMin)
        if (task1.timeMin > task2.timeMin) return 1;
      return -1;
    });

    let timerCounter = 0;
    let schedule = [];

    taskListSorted.forEach((task) => {
      schedule.push({
        initTimeMin: timerCounter,
        time: Number(task.timeMin),
        name: task.name,
        color: generateRandomColor(),
      });
      timerCounter += Number(task.timeMin);
    });

    console.log(schedule);
    SetOrganizedTasks(schedule);
  }

  return (
    <div className="home">
      <h3>Auto Cronograma</h3>
      <Schedule
        organizedTasks={organizedTasks}
        SetOrganizedTasks={SetOrganizedTasks}
      />
      <TaskList calculateMinLateness={calculateMinLateness} />
    </div>
  );
}

export default Home;
