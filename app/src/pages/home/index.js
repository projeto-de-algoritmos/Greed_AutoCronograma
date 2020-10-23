import React from "react";
import TaskList from "../../components/TaskList";
import Schedule from "../../components/Schedule";
import "./styles.css";

function home() {
  return (
    <div className="home">
      <h3>Home</h3>
      <Schedule />
      <TaskList />
    </div>
  );
}

export default home;
