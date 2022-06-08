import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteClick}) {

  const tasksArray = tasks.map(task => <Task 
      key={task.text}
      text={task.text} 
      category={task.category}
      onDeleteClick={onDeleteClick}
    />);

  return (
    <div className="tasks">
      {tasksArray}
    </div>
  );
}

export default TaskList;
