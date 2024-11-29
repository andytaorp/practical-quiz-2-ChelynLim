import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */

function Task ({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className="task">
        <li style={{ textDecoration: item.packed ? "line-through" : "none" }}></li>
      <input
        type="checkbox"
        checked={task.isComplete}
        onChange={() => onToggleTask(task.id)}
      />
      <span>{task.description}</span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}
export default function Task() {}
