import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  function handleDelete(deletedTaskText) {
    const updatedTasks = tasks.filter(task => task.text !== deletedTaskText);
    setTasks(updatedTasks);
  }

  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
