import React from "react";
import TaskList from "../../components/TaskList"
import "./styles.css";

function home() {
  return (
  	<div className="home">
  		<h3>Home</h3>
  		<TaskList />
  	</div>
  );
}

export default home;
