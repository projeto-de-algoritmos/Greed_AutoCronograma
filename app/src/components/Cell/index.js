import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import "./styles.css";

export default function Cell({
  organizedTasks,
  config,
  totalTimeMimDay,
  i,
  j,
}) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      <td
        className="cell"
        id={`t-${i}${j}`}
        style={{
          backgroundColor:
            organizedTasks?.find(
              (task) =>
                Number(task.initTimeMin) + Number(task.time) >=
                i * totalTimeMimDay + j * Number(config.stepMin)
            )?.color || null,
        }}
      ></td>
      {organizedTasks?.find(
        (task) =>
          Number(task.initTimeMin) + Number(task.time) >=
          i * totalTimeMimDay + j * Number(config.stepMin)
      ) && (
        <Tooltip
          placement="bottom"
          isOpen={tooltipOpen}
          target={`t-${i}${j}`}
          toggle={toggle}
        >
          {
            organizedTasks?.find(
              (task) =>
                Number(task.initTimeMin) + Number(task.time) >=
                i * totalTimeMimDay + j * Number(config.stepMin)
            )?.name
          }
        </Tooltip>
      )}
    </>
  );
}
